function sum() {
    let args = [];
    for(let i in arguments) {
        args.push(arguments[i]);
    }
    return args.reduce((sum, current) => {
        return sum + current;
    });
}
console.log(sum(1, 2)); 
console.log(sum(1, 2, 3));