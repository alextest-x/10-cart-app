import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";
import { ProductCardView } from "./ProductCardView";


export const CatalogView = ({ handler })=> {

    const [products, setProducts] = useState([]);

    /*
    //para cargar la informacion
    const [isLoading, setIsLoading] = useState(true);
    */


    /*
    getProducts() recibe una promise que le mandamos del service
    ProductService

    se espera los productos (un arreglo de productos) 
    y no la promesa de productos
    que es asincrona o async
    */


    //hacemos la funcion para recibir los productos afuera de useffect
    //await esperamos que se resulva la promesa, convertimos y obtenemos 
    //los productos en json como un arreglo

    const findAll = async () => {
         const prods = await getProducts(); 
         //para recibir los objetos del backend de producto en prods y lo actualizamos en 
         //useState en products  se la pasamos con el setProducts
         setProducts(prods); 
         //setIsLoading(false);
    }


    useEffect( 
        () => {

          //aqui solo ponemos la funcion findAll()
          //para que guarde los productos en el estado

          findAll();


            //se modifica para recibir los objetos productos
            //setProducts(getProducts());
               
            //  const prods = await getProducts(); //usamos un await y lo ponemos en funcion afuera del useffect()
            //  setProducts(prods); //para recibir los objetos del producto
        
          }, []);

  return (
    <>
    
     

     {
        //isLoading && <div className="alert alert-info"> Cargando ... </div>
     }
    <div className="row">
          {products.map(prod => (

          <div className="col-4 my-2" 
                key={prod.id}>
              
              <ProductCardView
                handler={handler}
                id={prod.id}
                name={prod.name} 
                description={prod.description}
                price={prod.price} 
              />

          </div>
        ))}

    </div>

  </>

 );

}