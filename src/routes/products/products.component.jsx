import { Route, Routes } from "react-router-dom";

import Product from "../product-page/product-page.component";
import ProductsPreview from "../products-preview/products-preview.component";

const Products = () => {
    
    return (
        <Routes>
            <Route index element={<ProductsPreview />} />
            <Route path=':productId' element={<Product />} />
        </Routes>
    );
}

export default Products;