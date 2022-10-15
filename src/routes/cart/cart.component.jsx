import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/cart-item/cart-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { store } from "../../store/store";

const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    return (
        <div className="max-w-7xl mx-auto animate__animated animate__fadeIn pb-32">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
            
            {cartItems.length === 0 ? (<h1 className="text-center mt-10 font-medium" >Oops! Your Cart is Empty!</h1>) : <div className="float-right mr-10 font-medium">
                Total: ${ numberWithCommas(cartTotal.toFixed(2)) }
            </div>}

            
        </div>
    );
}

export default Cart;