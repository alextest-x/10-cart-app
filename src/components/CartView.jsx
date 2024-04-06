import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { calculateTotal } from "../services/productService";


export const CartView = ({ handlerDelete, items }) => {
   
    const[total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

        /*
        // poniendo el localstorage(valorvariable, guarda un string);
        // sessionStorage.setItem('key', 'value');

        // pero items es un objeto hay que convertirlo a una cadena
        // con JSON.stringify convierte un objeto en un string
        // localStrorage  guarda el valor
        // sessionStorage no guarda el valor si cierra el navegador
       
       
        //quitamos el sessionStorage y lo pasamos al CartApp
        //sessionStorage.setItem('cart', JSON.stringify(items));
                  
            //lo pasamos al productService con la funcion calculateTotal
            //items.reduce((accumulator, item) => accumulator + item.product.price*item.quantity, 0)

        //);
        */


    const onDeleteProduct = (id) => {

       console.log('eliminando producto')

       handlerDelete(id);
        
    }

    const onCatalog =() => 
    {
       navigate('/catalog');

    }


  return (
      <>
          <h3>Carro de compras</h3>
          <table className="table table-hover table-striped">
              <thead>
                  <tr>
                      <th>Nombre</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Total</th>
                      <th>Eliminar</th>
                  </tr>
              </thead>
              <tbody>
                {items.map(item => (
                    <tr key={item.product.id}>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                           <td>{item.quantity}</td>
                           <td>{item.quantity * item.product.price} </td>
                           <td><button
                           className="btn btn-danger"
                            onClick={() => onDeleteProduct(item.product.id)}>eliminar</button></td>
                       
                    </tr>

                  ))} 

              </tbody>
              <tfoot>
                  <tr>
                      <td colSpan="3" className="text-end fw-bold">Total</td>
                      <td colSpan="2" className="text-start fw-bold">{total}</td>
                  </tr>
              </tfoot>
          </table>
          <button 
          className="btn btn-success"
          onClick={onCatalog}
          >Continuar Comprando</button>
      </>
  )
}

