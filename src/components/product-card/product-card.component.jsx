import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, title, author, cover, price} = product;

    return (
        <div key={title} className="w-60 m-10 group relative">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                <img
                    src={cover}
                    alt={title}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={id.toString()}>
                        <span aria-hidden="true" className="absolute inset-0" />
                      {title}
                    </Link>
                      
                   
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{author}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">${price}</p>
              </div>
            </div>
    );
}

export default ProductCard;