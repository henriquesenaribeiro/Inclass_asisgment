//Task 1: Working with Arrays

let products = [
  { name: "Laptop" , price: 1200, category: "Eletronics" },
  { name: "Phone" , price: 800, category: "Eletronics" }
  ];

function getProductsByCategory(products, category) {
  return products.filter(product => product.category === category)
}

console.log(getProductsByCategory(products, "Eletronics"));

//Task 2: Array methods - Map

let products = [
  { name: "Laptop", price: 1000, category: "Eletronics"},
  { name: "Desk Chair", price: 1100, category: "Furniture"}
  ];

function applyDiscount(product, discountRate) {
  return products.map(product => (
    ...product,
    price: product.price - (product.price * discountRate)
  }
}

console.log(applyDiscount(products, .1));


