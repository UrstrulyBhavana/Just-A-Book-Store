import { productsData } from "../../utils/products-data";

import ProductCard from "../../components/product-card/product-card.component";

const ProductsPreview = () => {

    return (
        <div className="mx-auto max-w-7xl flex flex-wrap justify-between animate__animated animate__fadeIn">
            { productsData.map( (product) => {
                return (
                    <ProductCard key={product.id} product={product} /> 
                )
            })}  
        </div>
        
    );
}

export default ProductsPreview;