// Objects created using object literal
var motorcycle = {
    brand: 'Kawasaki',
    model: 'Ninja',
    year: 1986
}
console.log(motorcycle);

// Objects created using constructor function
function MyMotorcycle(brand, model, year){
    this.brand = brand,
    this.model = model,
    this.year = year
}

// Create object
let bikes = new MyMotorcycle("Honda", "CBR", 2022);
console.log(bikes);