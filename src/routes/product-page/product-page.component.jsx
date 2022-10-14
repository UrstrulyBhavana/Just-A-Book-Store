import { useParams } from "react-router-dom";
import { productsData } from "../../utils/products-data";

const Product = () => {
    const { productId } = useParams();
    const product = productsData.find(prod => prod.id.toString() === productId);

    const { id, title, author, cover, price, description } = product;

    return (
        <div className="mt-10 flex justify-between max-w-7xl mx-auto">
            <div className=" w-4/6 mx-10 overflow-hidden">
                <h1 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Title:</span> {title}</h1>
                <h2 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Author(s):</span> {author}</h2>
                <h3 className="text-gray-400 text-md font-medium"><span className="text-gray-800">Description:</span> {description}</h3>
            </div>
            <div className="w-72 mx-10">
                <div className="overflow-hidden">
                    <img className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg" src={cover} alt={title} />
                </div>
                
                <div className="my-10">
                    <div className="w-full flex justify-between">
                        <span>Price: </span> 
                        <span >$ {price}</span>
                    </div>

                    <div className="w-full flex justify-between">
                        <span >Quantity:</span>
                        <div>
                            <button className="mr-3 text-gray-800 font-medium hover:font-black">-</button>
                            <span>5</span>
                            <button className="ml-3 text-gray-800 font-medium hover:font-black">+</button> 
                        </div>
                    </div>
                    
                </div>

                <div>
                    <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add to Cart
                    </button>
                </div>


            </div>
        </div>
    );
}

export default Product;