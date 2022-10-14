import { Outlet } from "react-router-dom";
import ProductHighlight from "../../components/product-highlight/product-highlight.component";
import ProductsThumbnails from "../../components/products-thumbnails/products-thumbnails.component";

const Home = () => {
    
    return (
        <div className="max-w-7xl mx-auto ">
            <ProductHighlight />

            <ProductsThumbnails />
        </div>
    );
}

export default Home;