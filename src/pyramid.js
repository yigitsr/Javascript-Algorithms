// pyramid
let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        string += " ";
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        string += "*";
    }
    string += "\n";
}
console.log(string);

// reversed pyramid
let nmb = 5;
let str = "";
// External loop
for (let i = 0; i < nmb; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        str += " ";
    }
    // printing star
    for (let k = 0; k < 2 * (nmb - i) - 1; k++) {
        str += "*";
    }
    str += "\n";
}
console.log(str);