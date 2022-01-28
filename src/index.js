
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    return matrix.reduce( (arr, item, index) => {
        item.sort( (a,b) => (index % 2 === 0) ? a-b : b-a ).map( (elem) => arr.push(elem) );
        return arr;
    }, []);   
}

