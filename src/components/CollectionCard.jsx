import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";


const CollectionCard = ({data: { _id, image, name, price }, classPadding}) => {
	const navigate = useNavigate();   // Hook to programmatically navigate to product details
	const {currency} = useContext(ShopContext)
	

	return (
		<div
			className={`collection-card trans-3 p-2 border-0 card box-shadow-gray cursor ${classPadding}`}
			onClick={() => navigate(`/products/${_id}`)}                  // Navigate to product details on click
			data-aos={"fade-up"}
		>
			<figure className="overflow-hidden rounded">
				<img
					src={image[0]}    
					alt={name}
					className="card-img rounded mx-h-300 trans-3 img-scall"
				/>
			</figure>
			<article className="card-body text-start p-0">
				<h4 className="card-title fs-6 c-gray fw-normal">{name}</h4>
				<div className="price fw-bold fs-small c-d-gray">{price}{currency}</div>
			</article>
		</div>
	);
};

export default CollectionCard;
