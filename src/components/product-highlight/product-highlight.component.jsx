import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectHighlightedProduct } from "../../store/home/home.selector";
import { productsData } from "../../utils/products-data";


const ProductHighlight = () => {
    const product = useSelector(selectHighlightedProduct);
    const { id, title, author, cover, description } = product;

    return (
        <div className=" mt-10 flex max-w-7xl mx-auto overflow-hidden  animate__animated animate__fadeIn">
            
            <Link className="ml-10 overflow-hidden hover:opacity-75 " to={`products/${id}`}>
                <img className="rounded-lg h-96 w-72" src={cover} alt={title} />
            </Link>

            <div className="w-4/5 mx-10 overflow-hidden flex flex-col justify-between items-end">
                <div>
                    <h1 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Title:</span> {title}</h1>
                    <h2 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Author(s):</span> {author}</h2>
                    <h3 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Description:</span> {description.substring(0, 600)}...</h3>
                </div>

                <Link to={`products/${id}`} className="mt-10 w-28 flex items-center justify-center rounded-md border border-transparent bg-gray-200 py-2 px-2 text-base font-medium hover:bg-black hover:text-white ">
                    See Product
                </Link>


            </div>
            
        </div>
    );
}

export default ProductHighlight;