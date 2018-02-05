
import http from "axios";


// products mock test

/**
 * 
 * @param {String} data Dado de entrada
 * @param {Number} time Tempo de retorno
 */
const mock = (data, time) => {
    return new Promise( resolve => {
        return setTimeout(() => {
            console.log(data);
            return resolve(data);
            
        }, time);

    })
}


class Products{
    static all(){
        return mock([
            {
                id: "test",
                nome: "Nome do produto",
                descricao: "Descricao"
            }
        ], 2000)
    }
}

export default Products;