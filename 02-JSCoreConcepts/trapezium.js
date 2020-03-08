let trapez = (a,b,h) => {
    let poleTrapezu = ((a+b)*h)/2;
    return poleTrapezu;
}

console.log(`Pole powierzchni trapezu wynosi: ${trapez(2,4,2)}`);