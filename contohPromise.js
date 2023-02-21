function searchProducts(input) {
  return new Promise((resolve, reject) => {
    const products = [
      { id: 1, brand: "lenovo", nameProduct:"Lenovo Flex 5", price: 1e10 },
      { id: 2, brand: "acer", nameProduct:'Acer Swift 3x', price: 83e5},
      { id: 3, brand: "apple", nameProduct:'MacBook Air With M1 Processor', price: 15139845 },
      { id: 4, brand: "HP", nameProduct:'HP Pavilion Gaming Laptop 15-ec1071AX', price: 14949000 },
    ];

    setTimeout(() => {
      const matchingProducts = products.filter((product) =>
        product.brand.toLowerCase().includes(input.toLowerCase())
      );
        if (matchingProducts.length > 0) {
          matchingProducts.forEach(products => {
            resolve(products)
          });
        } else {
          reject(`No products matching "${input}" were found.`);
        }
    }, 2000);
  });
}

searchProducts("acer")
.then((product) => {
    const {brand, nameProduct, price} = product;
    console.log(`Brand: ${brand}, Name: ${nameProduct}, Price: ${price}`);
  })
  .catch((error) => {
    console.error(error);
  });


const cekLulus = (nilai) => {
  if (nilai > 100) {
    return console.log('input yang anda masukan tidak boleh lebih dari 100')
  } else if (nilai < 0) {
    return console.log('input yang anda masukan tidak boleh lebih kecil dari 0')
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = ''
      const lulus = 'anda lulus'
      if (nilai > 100) {
        return console.log(
          "input yang anda masukan tidak boleh lebih dari 100"
        );
      } else if (nilai < 0) {
        return console.log('input yang anda masukan tidak boleh lebih kecil dari 0')
      }
      if(nilai >= 75) {
        result = true
      }
      if(result) {
        resolve(lulus)
      } else {
        reject(new Error('Maaf anda tidak lulus'))
      }
    }, 5000)
  })
}

cekLulus(90).then((nilai) => {
  console.log(nilai)
  return nilai
}).catch((e) => {
  console.log(e.message)
})