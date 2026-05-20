export function add(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return a / b;
}

export function power(base: number, exponent: number): number {
    return Math.pow(base, exponent);
}

export function squareRoot(value: number): number {
    if (value < 0) {
        throw new Error("Cannot calculate square root of a negative number.");
    }
    return Math.sqrt(value);
}

export function factorial(n: number): number {
    if (n < 0) {
        throw new Error("Cannot calculate factorial of a negative number.");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}