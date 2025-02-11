//Task 1: Working with Arrays

let products = [
  { name: "Laptop" , price: 1200, category: "Eletronics" },
  { name: "Phone" , price: 800, category: "Eletronics" }
  ];

function getProductsByCategory(products, category) {
  return products.filter(product => product.category === category)
}

console.log(getProductsByCategory(products, "Eletronics"));
