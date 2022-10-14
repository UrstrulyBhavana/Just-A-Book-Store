import { productsData } from "../../utils/products-data";


const ProductHighlight = () => {
    const { id, title, author, cover, price, description } = productsData[0];
    return (
        <div className=" mt-10 flex max-w-7xl mx-auto overflow-hidden">
            
            <div className="w-60 h-1/2 ml-10 overflow-hidden">
                    <img className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-lg" src={cover} alt={title} />
            </div>

            <div className="w-4/5 mx-10 overflow-hidden">
                <h1 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Title:</span> {title}</h1>
                <h2 className="text-gray-400 pb-2 text-md font-medium"><span className="text-gray-800">Author(s):</span> {author}</h2>
                <h3 className="text-gray-400 text-md font-medium"><span className="text-gray-800">Description:</span> {description}</h3>
            </div>
            
        </div>
    );
}

export default ProductHighlight;