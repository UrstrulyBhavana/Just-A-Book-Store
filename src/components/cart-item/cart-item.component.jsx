import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsData } from "../../utils/products-data";
import { store } from "../../store/store";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";


const CartItem = ({ cartItem }) => {
    const { id, title, author, cover, price, description, quantity } = cartItem;

    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleAddItemToCart = () => { 
        dispatch(addItemToCart(cartItems, cartItem));
    }

    const handleRemoveItemFromCart = () => {  
        dispatch(removeItemFromCart(cartItems, cartItem));
    }
    
    const handleClearItemFromCart = () => {   
        dispatch(clearItemFromCart(cartItems, cartItem));
    }

    return (
        <div className="flex my-10 h-60 overflow-hidden">
            
            <div className="mr-5 ml-10">
                <Link to={`/products/${id}`}>
                    <img className="hover:opacity-75 h-full w-full object-cover object-center rounded-lg" src={cover} alt={title} />   
                </Link>
                
            </div>
            
            <div className="w-4/6 mx-5 ">
                <h1 className="text-gray-800 text-md font-medium">{title}</h1>
                <h2 className="text-gray-400 pb-2 text-md font-medium">{author}</h2>
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