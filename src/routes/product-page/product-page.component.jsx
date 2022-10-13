import { useParams } from "react-router-dom";
import { products } from "../../utils/products-data";

const Product = () => {
    const { productId } = useParams();
    const product = products.find(prod => prod.id === productId);
    const { id, title, author, cover, price, description } = product;

    return (
        <h1>
            this is Product
            {title}, {author}, {cover}, {price}, {description}
            
        </h1>
    );
}

export default Product;