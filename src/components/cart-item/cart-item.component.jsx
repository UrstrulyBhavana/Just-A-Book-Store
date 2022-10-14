import { Link } from "react-router-dom";

import { products } from "../../utils/products-data";

const CartItem = () => {
    const { id, title, author, cover, price, description } = products[0];

    return (
        <div className="flex my-10  max-w-7xl mx-auto h-60 overflow-hidden">
            
            <div className="mr-5 ml-10">
                <img className="h-full w-full object-cover object-center rounded-lg" src={cover} alt={title} />   
            </div>
            
            <div className="w-4/6 mx-5 ">
                <h1 className="text-gray-800 pb-2 text-md font-medium">{title}</h1>
                <p>{description.substring(0, 400)}...</p>
            </div>
            
            <div className="w-1/6 ml-5 mr-10">

                <div className="text-gray-800 pb-2 text-right font-medium" >
                    X
                </div>

                <div className="w-full flex justify-between">
                    <span>Price: </span> 
                    <span >$ {price}</span>
                </div>

                <div className="w-full flex justify-between">
                    <span >Quantity:</span>
                    <div>
                        <button className="mr-3 font-medium">-</button>
                        <span>2</span>
                        <button className="ml-3 font-medium">+</button> 
                    </div>
                </div>
                    
            </div>

        </div>
    );
}

export default CartItem;