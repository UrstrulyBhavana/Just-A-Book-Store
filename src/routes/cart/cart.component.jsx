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
        <div className="max-w-7xl mx-auto ">
            {cartItems.map((cartItem) => (
                <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}

            <div className="float-right mr-10 font-medium">
                Total: ${ numberWithCommas(cartTotal.toFixed(2)) }
            </div>
        </div>
    );
}

export default Cart;