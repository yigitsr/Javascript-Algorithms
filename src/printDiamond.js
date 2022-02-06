// #1
function printDiamond(size) {

    for (var i = 1; i <= size; i++) {
        for (var s = size - 1; s >= i; s--) {
            process.stdout.write(" ");
        }
        for (var j = 1; j <= i; j++) {
            process.stdout.write("* ")
        }
        console.log();
    }
    if (i == size + 1) {
        for (var i = 1; i <= size - 1; i++) {
            for (var s = 1; s <= i; s++) {
                process.stdout.write(" ");
            }
            for (j = i; j <= size - 1; j++) {
                process.stdout.write("* ");
            }
            console.log();
        }
    }
}
printDiamond(5);

console.log('********************************************************')
console.log('********************************************************')

// #2
let n = 5;

// Upper pyramid
for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(' ')
    }
    // printing star
    for (let k = 0; k < 2 * i - 1; k++) {
        process.stdout.write('*')
    }
    console.log();
}
// inner pyramid
for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
        process.stdout.write(' ');
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k > 0; k--) {
        process.stdout.write('*');
    }
    console.log();
}