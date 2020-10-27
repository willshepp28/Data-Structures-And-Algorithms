const states = require("./mock.data");



const getStateLinearSearch = (array, value) => {

    if(!array && !value) { return undefined; }

    for(let i = 0; i < states.length; i++) {
        if(states[i] === value) {
            return i;
        }
        if(i + 1 === states.length && states[i] !== value) {
            return - 1;
        }
    }
};




console.log(getStateLinearSearch(states, "South Carolina"))

console.log(getStateLinearSearch(states, "Not a State"))