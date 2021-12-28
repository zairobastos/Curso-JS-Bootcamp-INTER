function erros(array,tamanho) {
    try {
        if (!array && !tamanho) 
            throw new ReferenceError('Nenhum parâmetro passado');

        if(typeof array !== 'object')
            throw new TypeError('Array não é do tipo "object"');

        if (typeof tamanho !== 'number')
            throw new TypeError('O tamanho deve ser do tipo "number"');
        if(array.length !== tamanho)
            throw new RangeError('O tamanho do array deve ser do mesmo valor que foi passado!');

        return array;
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.error(`${error.name}: ${error.message}`);
        }else if (error instanceof TypeError){
            console.error(`${error.name}: ${error.message}`);
        }else if (error instanceof RangeError){
            console.error(`${error.name}: ${error.message}`);
        }else{
            console.error(`Error não listado identificado: ${error}`);
        }
    }
}

const array = [];
erros(array,'a');
