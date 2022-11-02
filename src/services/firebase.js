import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  query,
  where,
  addDoc,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7KONMGCYioRK-ktAjmtY-vz2jRJCjIpg",
  authDomain: "ecommerce-6f40f.firebaseapp.com",
  projectId: "ecommerce-6f40f",
  storageBucket: "ecommerce-6f40f.appspot.com",
  messagingSenderId: "587803931974",
  appId: "1:587803931974:web:a8c546b29a6c3bb5d9a147",
  
};

//1. Inicializar Firebase e inicializar FIRESTORE
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getProducts() {
  const collectionRef = collection(db, "products");
  let results = await getDocs(collectionRef);

  let dataProducts = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataProducts;
}

export async function getAProduct(idParams) {
  const docRef = doc(db, "products", idParams);
  const docResult = await getDoc(docRef);
  if (docResult.exists()) {
    return { id: docResult.id, ...docResult.data() };
  }
}

export async function getProductsByCategory(idCategoryParams) {
  const collectionRef = collection(db, "products");

  const queryCat = query(
    collectionRef,
    where("category", "==", idCategoryParams)
  );

  let results = await getDocs(queryCat);

  let dataProducts = results.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return dataProducts;
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "orders");
  let respuesta = await addDoc(collectionRef, orderData)
  return respuesta.id;
}


  
  


export default FirebaseApp;
