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

function sum3 (x, y, z) {
  return x+y+z
}

let numbers = [1,2,3}
console.log(sum3(...numbers));

//Task 3: Array Methods - Reduce

let sales =[250,400,300,500];
function calculateTotalReveneu(sales) {

  return sales.reduce((total, item) => total +sale, 0) // 0 is starting number

}

console.log(calculateTotalRevenue(sales));

//Task 4: Object Manipulation

let employee = {
  name: "Fabi",
  salary: 80000,
  position: "Honors Marketing Rep"
};

function updateSalary(employee, percentageIncrease) {
  employee.salary = employee.salary * percentageIncrease;
}

updateSalary(employee, .1)

console.log(employee)
