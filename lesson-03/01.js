const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
    let a = colors.filter(function(elem) {
        if (elem == "черный" || elem == "красный" || elem == "желтый") {
            return true;
        } else {
            return false;
        }
    })
    return a.join('-');
}

console.log(createColorString());

