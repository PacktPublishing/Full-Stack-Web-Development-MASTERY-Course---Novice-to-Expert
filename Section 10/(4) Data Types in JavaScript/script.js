// console.log("This is tutorial on data types");

// Primitive (stack)
/*
    1. String
    2. Numbers
    3. Boolean
    4. Null
    5. Undefined
*/

let name = "full stack2";
console.log("This course covers " + name + " web development");
console.log("The data type is "+ (typeof name));

let marks = 98;
console.log("Tom scored " + marks);
console.log("The data type is "+ (typeof marks));

let state = false;
console.log("This is best web development course " + state);
console.log("The data type is " + (typeof state));

let test1 = null;
console.log(test1);
console.log("The data type is " + (typeof test1));

let test2 = undefined;
console.log(test2);
console.log("The data type is " + (typeof test2));

// Reference (Heap / derived)

/*
    1. Arrays
    2. Object Literals
    3. functions
    4. Dates
*/

let arr = [10,undefined,"jack",false,null];
console.log(arr);
console.log("The data type is " + (typeof arr));

let students = {
    Jack: true,
    John: 96,
    Tom: 98
}
console.log(students);
console.table(students);
console.log("The data type is " + (typeof students));

