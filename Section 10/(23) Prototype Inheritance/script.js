const myInfo = {
    isMale: true,
    Bio: function(){
        console.log(`My name is ${this.name}. Am I male? ${this.isMale}`);
    } 
}

const mySelf = Object.create(myInfo);
mySelf.name = 'John';
mySelf.Bio();