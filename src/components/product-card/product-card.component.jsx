import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, title, author, cover, price} = product;

    return (
        <div key={title} className="w-60 m-10 group relative">
              <div className="overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                <img
                    height={'250px'}
                    width={'250px'}
                    src={cover}
                    alt={title}
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