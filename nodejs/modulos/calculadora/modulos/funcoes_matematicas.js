export function soma(a, b) {
    return a + b;
}

export function subtrai(a, b) {
    return a - b;
}

export function multiplica(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero não é permitida.');
    }
    return a / b;
}

// Outra forma de exportar todas as funções de uma vez