// next()

// value: is the current element of sequence

// done: is a boolean value indicating whether any more elements in the sequence could be iterated upon

// {value: 'next element', done: false}

function myIterable(){
    let counter = 0;
    return{
        next: function(){
            if (counter < 5) {
                counter++;
                return{done: false, value: counter};
            } else {
                return{done: true, value: undefined};
            }
        }
    }
}

myIterable();