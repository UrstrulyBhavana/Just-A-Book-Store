import { useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/cart-item/cart-item.component";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { store } from "../../store/store";


const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    
    return (
        <div>
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div>
                Total: ${cartTotal}
            </div>
        </div>
    );
}

export default Cart;