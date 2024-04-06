
/*
para leer  del backend spring
comentamos porque va a leer la data de productos a un archivo products.js
import { products } from "../data/products"

*/

export const getProducts = async () => {

    /*
   // para leer del backend spring
   // usamos el fetch que regresa un promise 
   // debemos recibirlos como un objecto Json
   // usamos el awaite y el async()
   */

   /*
    awaite
   con el awaite se espera que se resuelva la repuesta
    en la promesa (o PRomise<Response></Response>) y luego resultado
    se devevuelve del objeto Response y no el objeto Promise
   */


   const response = await fetch('http://localhost:8080/products');
   
   //conviretendo la repuesta en datos json 
   const products = await response.json();
    return products;
    
}

export const calculateTotal = (items)=>{
    return  items.reduce(
        
        (accumulator, item) => accumulator + item.product.price*item.quantity, 0);
}




