const data = [
  {
    id: 1,
    title: "Pipeta Para mascota",
    img: "https://piensoymascotas.com/19160-large_default/frontline.jpg",
    price: 250,
    detail: "para gatos y perros!",
    stock: 15,
    category: "cuidado",
  },
  {
    id: 2,
    title: "juguetes para perro",
        img : 'https://images-na.ssl-images-amazon.com/images/I/81ZFBEivvLL._SL1358_.jpg',
    price: 600,
    detail: "juguete para perro",
    stock: 32,
    category: "juguete",
  },
  {
    id: 3,
    title: "Alimento para perro",
    img : 'https://cdnx.jumpseller.com/pet-bj/image/12270315/7797453000673.png?1658025134',
    price: 3000,
    detail: "Alimento para perros!",
    stock: 15,
    category: "alimentos",

  },
  {
    id: 4,
    title: "Jugute para perro",
    img: "https://www.seekpng.com/png/detail/842-8424489_juguete-de-perro-png.png",
    price: 800,
    detail: "Juguete para perro!",
    stock: 15,
    category: "Juguete",

  },
  
];

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 2000);
  });
}

export function getAProduct(idParams) {
  return new Promise((resolve, reject) => {
    let cursoReq = data.find((item) => {
      return item.id === Number(idParams);
    });
    setTimeout(() => {
      if (cursoReq === undefined)
        reject(new Error("product."));
      else {
        resolve(productReq);
      }
    }, 2000);
  });
}

export function getProductsByCategory(idCategoryParams) {
  return new Promise((resolve) => {
    let arrayFilterCourses = data.filter(
      (item) => item.category === idCategoryParams
    );
    setTimeout(() => resolve(arrayFilterproducts), 2000);
  });
}
