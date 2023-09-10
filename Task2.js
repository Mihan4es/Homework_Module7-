let color = 'orange';

const objectTwo = {
    height: 500,
    width: 800,
    color: 'orange'
};

function searchingForPropertyName (str, obj) {
    return (str in obj)
}

console.log(searchingForPropertyName('color', objectTwo))