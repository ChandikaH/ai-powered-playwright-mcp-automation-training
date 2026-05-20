function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("Hello, Generics!");
console.log(output);

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

let arrayOutput = loggingIdentity<number>([1, 2, 3, 4]);
console.log(arrayOutput);