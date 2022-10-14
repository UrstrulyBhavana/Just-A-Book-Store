import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productsData } from "../../utils/products-data";
import { store } from "../../store/store";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";


const CartItem = ({ cartItem }) => {
    const { id, title, author, cover, price, description, quantity } = cartItem;

    const dispatch = useDispatch();
    const handleAddItemToCart = () => {
        const state = store.getState();
        dispatch(addItemToCart(state.cartItems, cartItem));
    }

    const handleRemoveItemFromCart = () => {
        const state = store.getState();
        dispatch(removeItemFromCart(state.cartItems, cartItem));
    }
    
    const handleClearItemFromCart = () => {
        const state = store.getState();
        dispatch(clearItemFromCart(state.cartItems, cartItem));
    }

    return (
        <div className="flex my-10  max-w-7xl mx-auto h-60 overflow-hidden">
            
            <div className="mr-5 ml-10">
                <Link to={`/products/${id}`}>
                    <img className="hover:opacity-75 h-full w-full object-cover object-center rounded-lg" src={cover} alt={title} />   
                </Link>
                
            </div>
            
            <div className="w-4/6 mx-5 ">
                <h1 className="text-gray-800 pb-2 text-md font-medium">{title}</h1>
                <p>{description.substring(0, 400)}...</p>
            </div>
            
            <div className="w-1/6 ml-5 mr-10">

                <div>
                    <span onClick={ handleClearItemFromCart } className="text-gray-800 float-right pb-2 text-right font-medium hover:font-black cursor-pointer">X</span>
                </div>

                <div className="w-full flex justify-between">
                    <span>Price: </span> 
                    <span >$ {price}</span>
                </div>

                <div className="w-full flex justify-between">
                    <span >Quantity:</span>
                    <div>
                        <button onClick={ handleRemoveItemFromCart } className="mr-3 text-gray-800 font-medium hover:font-black">-</button>
                        <span>{quantity}</span>
                        <button onClick={ handleAddItemToCart } className="ml-3 text-gray-800font-medium hover:font-black">+</button> 
                    </div>
                </div>
                    
            </div>

        </div>
    );
}

export default CartItem;