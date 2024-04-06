import { NavBar } from "./NavBar";
import { userItemsCart } from "./hooks/userItemsCart";
import { CartRoutes } from "./routes/cartRoutes";


/*
const initialCartItems =
[
   
  {
    
    product: {
        id: 1,
        name: 'Teclado mecanico RGB',
        description: 'Teclado mecanico RGB',
        price: 1000

      },

      quantity: 0,
      total: 0
      
   }  

]
*/

//este es un string para que lo reciba hay que convertir a un objecto
//getItem obtiene el valor y con setItem cambia el valor
//con JSON.parse(); 
//se encuentra mientras es abierto el navegador con sessionStorage
//localStrorage() mantiene los datos anque se cierre le navegador

//lo pasamos al userItemsCart.js que es un hook personalizado
//const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {

  //hook personalizado
  const { cartItems, handlerAddProductCart, handlerDeleteProductCart } = userItemsCart();

/* 
  //pasando al userItemsCart.js
  const [cartItems, dispatch ]= useReducer(itemsReducer, initialCartItems);

    //useEffect(() => {
  
    //sessionStorage.setItem('cart', JSON.stringify(cartItems));
    // }, [cartItems]);

     
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            dispatch(
                {
                    type: UpdateQuantityProductCart,
                    payload: product,
                }
            );
        } else {
            dispatch({
                type: AddProductCart,
                payload: product,
            });
        }
    }

    const handlerDeleteProductCart = (id) => {
    dispatch(
      {
        type: DeleteProductCart,
        payload: id, 
      }
    )
      
  }
*/

    return(
    <>
      <NavBar />

      <div className="container my-4">
        
           <h3>Cart app</h3>

           <CartRoutes 
           cartItems={cartItems}
           handlerAddProductCart={ handlerAddProductCart}
           handlerDeleteProductCart={handlerDeleteProductCart}
          />
      
      </div> 
    </>

  )

}