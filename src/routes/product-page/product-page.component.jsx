import { useParams } from "react-router-dom";
import { products } from "../../utils/products-data";

const Product = () => {
    const { productId } = useParams();
    const product = products.find(prod => prod.id.toString() === productId);

    const { id, title, author, cover, price, description } = product;

    return (
        <div className="mt-10 flex justify-around">
            <div className=" w-4/6 mx-20 overflow-hidden">
                <h1 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Title:</span> {title}</h1>
                <h2 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Author(s):</span> {author}</h2>
                <h3 className="text-gray-400 text-md font-medium"><span className="text-gray-800">Description:</span> {description}</h3>
            </div>
            <div className="w-72 mx-20">
                <div className="overflow-hidden">
                    <img className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg" src={cover} alt={title} />
                </div>
                
                <div className="my-10">
                    <p>Price: ${price}</p>
                    <p>Quantity: quantity</p>
                </div>

                <div>
                    <button>Add to Cart</button>
                </div>


            </div>
        </div>
    );
}

export default Product;