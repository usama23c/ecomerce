import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import HeaderDashed from "./HeaderDashed";
import CollectionCard from "./CollectionCard";

const BestSeller = () => {
	const { productsData } = useContext(ShopContext);
	const [bestSeller, setBestSeller] = useState([]);

	useEffect(() => {
		const bestProducts = productsData.filter((product) => product.bestseller);
		setBestSeller(bestProducts.slice(0, 5));
	}, [productsData]);

	return (
		<div className="best-seller py-5">
			<HeaderDashed
				head1="BEST"
				head2="SELLERS"
				paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio"
			/>
			<section>
                <div className="row justify-content-center">
				{bestSeller.map((product) => (
                    <div key={product._id} className="col-6 col-md-4 col-lg-3 col-xl mt-3" style={{maxWidth: '350px'}}>
                        <CollectionCard data={product} classPadding="px-0" />
                    </div>
				))}
                </div>
			</section>
		</div>
	);
};

export default BestSeller;
