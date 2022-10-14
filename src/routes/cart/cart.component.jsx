import { useEffect } from "react";
import CartItem from "../../components/cart-item/cart-item.component";
import { store } from "../../store/store";


const Cart = () => {
    let state = store.getState();
    let cartItems = state.cartItems;
  
    return (
        <div>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
        </div>
    );
}

export default Cart;