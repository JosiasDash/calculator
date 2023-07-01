let nb = 0;
let operator = "+";
//get numbers
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let th = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let eg = document.getElementById("eg");
let fst = undefined;
let sec = undefined;
let newn = 0;
let plus = false;
let decimal = false;
let sous = false;
let re = false;
let array = [];
if (newn == 0) {
    document.getElementById("lab").innerHTML = 0;
}
//operators
document.getElementById("plus").onclick = function () {
    array.push(newn);
    newn = 0;
    array.push("+");
}

document.getElementById("moins").onclick = function () {
    array.push(newn);
    newn = 0;
    array.push("-");
}

document.getElementById("res").onclick = function () {
    array = delete_arr(array);
    newn = 0;
    document.getElementById("lab").innerHTML = 0;
}

eg.onclick = function () {
    array.push(newn);
    newn = 0;
    let re = get_result(array);
    document.getElementById("lab").innerHTML = re;
    array = delete_arr(array, re);
    newn = re;
}

document.getElementById("point").onclick = function () {
    newn *= -1;
    document.getElementById("lab").innerHTML = newn;
}

document.getElementById("del").onclick = function () {
    newn = parseInt(delete_nbr(newn));
    document.getElementById("lab").innerHTML = newn;
}
//Click numbers

zero.onclick = function () {
    newn = create_nbr(newn, 0);
    document.getElementById("lab").innerHTML = newn;
}

one.onclick = function () {
    newn = create_nbr(newn, 1);
    document.getElementById("lab").innerHTML = newn;
}

two.onclick = function () {
    newn = create_nbr(newn, 2);
    document.getElementById("lab").innerHTML = newn;
}

th.onclick = function () {
    newn = create_nbr(newn, 3);
    document.getElementById("lab").innerHTML = newn;
}

four.onclick = function () {
    newn = create_nbr(newn, 4);
    document.getElementById("lab").innerHTML = newn;
}

five.onclick = function () {
    newn = create_nbr(newn, 5);
    document.getElementById("lab").innerHTML = newn;
}

six.onclick = function () {
    newn = create_nbr(newn, 6);
    document.getElementById("lab").innerHTML = newn;
}

seven.onclick = function () {
    newn = create_nbr(newn, 7);
    document.getElementById("lab").innerHTML = newn;
}

eight.onclick = function () {
    newn = create_nbr(newn, 8);
    document.getElementById("lab").innerHTML = newn;
}

nine.onclick = function () {
    newn = create_nbr(newn, 9);
    document.getElementById("lab").innerHTML = newn;
}

//functions
function create_nbr(n, enter) {
    n = (n * 10) + enter;
    return n;
}

function delete_nbr(nbr) {
    return (nbr / 10);
}

function calculator(operator, x, y) {
    let re;
    if (x == undefined)
        return 0;
    else if (y == undefined) {
        return x;
    }
    switch (operator) {
        case "+":
            re = x + y;
            break;
        case "-":
            re = x - y;
            break;
        case "/":
            re = x / y;
            break;
    }
    return re;
}

function is_operator(elem) {
    if (elem != "+" && elem != "-")
        return true;
    else
        return false;
}

function get_result(array) {
    let f = undefined;
    let s = undefined;

    for (let i = 0; i < array.length; i++) {
        if (is_operator(array[i])) {
            if (f == undefined)
                f = array[i];
            f = calculator(array[i + 1], f, array[i + 2]);
        }
    }
    if (f == undefined)
        f = 0;
    return f;
}

function delete_arr(array, nbr)
{
    while (array.length > 0) {
        console.log("pop");
        array.pop();
    }
    //array.push(nbr);
    return array;
}
