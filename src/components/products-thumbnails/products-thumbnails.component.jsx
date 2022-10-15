import { productsData } from "../../utils/products-data";
import { setHighlightedProduct } from "../../store/home/home.action";
import { useDispatch } from "react-redux";

const ProductsThumbnails = () => {
    const dispatch = useDispatch();

    const handleClick = (product) => {

        console.log(product)
        dispatch(setHighlightedProduct(product));
    }

    return (
        <div>
            <h1 className="flex justify-between mt-10 mx-10 text-lg font-medium">Best Selling Titles</h1>
            <div className="flex justify-between my-5 mx-5">
                {productsData.map((product) => (
                <div key={product.id} className="w-32 mx-5 group  cursor-pointer" onMouseOver={ () => handleClick(product) }>
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