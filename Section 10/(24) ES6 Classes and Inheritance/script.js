// class SimpleDate{
//     constructor(givenYear, givenMonth, givenDay){
//         this.year = givenYear;
//         this.month = givenMonth;
//         this.day = givenDay;
//     }
//     addMonth(nMonths){

//     }

//     getMonth(){
//         return this.month;
//     }
// }

class car{
    constructor(givenName, givenYear){
        this.name = givenName;
        this.year = givenYear;
    }

    greet(){
        return `${this.name} says Hello`;
    }
}

class Bike extends car{
    constructor(givenName, givenYear, givenSpeed){
        super(givenName,givenYear);
        this.speed = givenSpeed;
    }
}

const bike1 = new Bike('Suzuki', 2022, 300);


const car1 = new car('BMW', '2022');

// call()