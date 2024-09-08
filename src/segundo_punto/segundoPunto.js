function sumarCuadros(arrayNumeros) {
    
    arrayNumeros.forEach(numero => {

        let numStr = numero.toString();
        
        console.log('+' + '-'.repeat(numStr.length) + '+');
        
        console.log('|' + numStr + '|');
        
        console.log('+' + '-'.repeat(numStr.length) + '+');
    });
    
    let sumaTotal = arrayNumeros.reduce((a, b) => a + b, 0).toString();
    
    console.log('+' + '='.repeat(sumaTotal.length) + '+');
    console.log('|' + sumaTotal + '|');
    console.log('+' + '='.repeat(sumaTotal.length) + '+');
}

const arrayNumeros = [1, 23, 453, 3267, 12354, 123456];
sumarCuadros(arrayNumeros);


