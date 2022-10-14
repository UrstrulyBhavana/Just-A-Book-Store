import { productsData } from "../../utils/products-data";

const ProductsThumbnails = () => {
    
    const Thumbnail = ({}) => {

    }

    return (
        <div>
            <h1 className="flex justify-between mt-10 mx-10 text-lg font-medium">Best Selling Titles</h1>
            <div className="flex justify-between my-5 mx-5 cursor-pointer">
                {productsData.map((product) => (
                <div className="w-32 mx-5 group">
                    <img className=" rounded-lg  group-hover:opacity-75" src={product.cover} alt={product.title} />
                    <p className="mt-4 text-xs">{product.title}</p>
                </div>

                ))
                }
            </div>
        </div>
    );
}

export default ProductsThumbnails;