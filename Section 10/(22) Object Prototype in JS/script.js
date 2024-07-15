// Object.prototype

// toString()

// valueOf()

// hasOwnProperty()

// isPropertyOf()

// propertyIsEnumerable()

// toLocaleString()

// toString()

// valueOf()

function Motorcycle(){
    this.brand = 'Kawasaki',
    this.model = 'Ninja'
}

Motorcycle.prototype.motoGP = function(){
    console.log("Always wear a helmet while riding / racing motorcycle");
}

let bikes = new Motorcycle()
bikes.toString();

// bikes_proto_link