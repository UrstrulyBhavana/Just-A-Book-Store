import ProductCard from "../../components/product-card/product-card.component";
import { products } from "../../utils/products-data";

const ProductsPreview = () => {

    return (
        <div className="mt-20 mx-20 flex flex-wrap justify-around">
            { products.map( (product) => {
                return (
                    <ProductCard key={product.id} product={product} /> 
                )
            })}  
        </div>
        
    );
}

export default ProductsPreview;