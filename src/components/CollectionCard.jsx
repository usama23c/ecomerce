// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ShopContext } from "../context/ShopContext";


// const CollectionCard = ({data: { _id, image, name, price }, classPadding}) => {
// 	const navigate = useNavigate();   // Hook to programmatically navigate to product details
// 	const {currency} = useContext(ShopContext)
	

// 	return (
// 		<div
// 			className={`collection-card trans-3 p-2 border-0 card box-shadow-gray cursor ${classPadding}`}
// 			onClick={() => navigate(`/products/${_id}`)}                  // Navigate to product details on click
// 			data-aos={"fade-up"}
// 		>
// 			<figure className="overflow-hidden rounded">
// 				<img
// 					src={image[0]}    
// 					alt={name}
// 					className="card-img rounded mx-h-300 trans-3 img-scall"
// 				/>
// 			</figure>
// 			<article className="card-body text-start p-0">
// 				<h4 className="card-title fs-6 c-gray fw-normal">{name}</h4>
// 				<div className="price fw-bold fs-small c-d-gray">{price}{currency}</div>
// 			</article>
// 		</div>
// 	);
// };

// export default CollectionCard;


import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const CollectionCard = ({ data: { _id, image, name, price }, classPadding = "" }) => {
  const navigate = useNavigate();
  const { currency } = useContext(ShopContext);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Handle navigation with accessibility
  const handleCardClick = () => {
    navigate(`/products/${_id}`);
  };

  return (
    <div
      className={`collection-card relative group p-3 border-0 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 bg-white cursor-pointer ${classPadding}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      data-aos="fade-up"
    >
      <figure className="relative overflow-hidden rounded-lg aspect-w-3 aspect-h-4">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
        )}
        <img
          src={image?.[0] || "/placeholder-image.jpg"}
          alt={name || "Product image"}
          className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${!isImageLoaded ? "opacity-0" : "opacity-100"}`}
          onLoad={handleImageLoad}
          onError={() => setIsImageLoaded(true)} // Handle broken images
          loading="lazy"
        />
      </figure>
      <article className="card-body text-start p-3">
        <h4 className="card-title text-sm font-medium text-gray-700 line-clamp-2 mb-2">
          {name || "Unnamed Product"}
        </h4>
        <div className="price font-bold text-base text-gray-900">
          {price ? `${currency}${price.toFixed(2)}` : "Price unavailable"}
        </div>
      </article>
    </div>
  );
};

export default CollectionCard;
