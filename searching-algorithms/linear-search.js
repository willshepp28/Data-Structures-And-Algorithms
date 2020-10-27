const states = require("./mock.data");



const getStatesUsingLinearSearch = (array, value) => {

    if(!array && !value) { return undefined; }

    for(let i = 0; i < array.length; i++) {
        if(array[i] === value) {
            return i;
        }
        if(i + 1 === array.length && array[i] !== value) {
            return - 1;
        }
    }
};




console.log(getStatesUsingLinearSearch(states, "South Carolina"))

console.log(getStatesUsingLinearSearch(states, "Not a State"))