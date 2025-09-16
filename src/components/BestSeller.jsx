// import { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../context/ShopContext";
// import HeaderDashed from "./HeaderDashed";
// import CollectionCard from "./CollectionCard";

// const BestSeller = () => {
// 	const { productsData } = useContext(ShopContext);
// 	const [bestSeller, setBestSeller] = useState([]);

// 	useEffect(() => {
// 		const bestProducts = productsData.filter((product) => product.bestseller);
// 		setBestSeller(bestProducts.slice(0, 5));
// 	}, [productsData]);

// 	return (
// 		<div className="best-seller py-5">
// 			<HeaderDashed
// 				head1="BEST"
// 				head2="SELLERS"
// 				paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio"
// 			/>
// 			<section>
//                 <div className="row justify-content-center">
// 				{bestSeller.map((product) => (
//                     <div key={product._id} className="col-6 col-md-4 col-lg-3 col-xl mt-3" style={{maxWidth: '350px'}}>
//                         <CollectionCard data={product} classPadding="px-0" />
//                     </div>
// 				))}
//                 </div>
// 			</section>
// 		</div>
// 	);
// };

// export default BestSeller;
import { useContext, useEffect, useState, useMemo } from "react";
import { ShopContext } from "../context/ShopContext";
import HeaderDashed from "./HeaderDashed";
import CollectionCard from "./CollectionCard";

const BestSeller = () => {
  const { productsData, isLoading, error } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  // Filter and slice bestsellers
  useEffect(() => {
    if (productsData?.length) {
      const bestProducts = productsData
        .filter((product) => product.bestseller)
        .slice(0, 5);
      setBestSeller(bestProducts);
    }
  }, [productsData]);

  // Memoized content to prevent unnecessary re-renders
  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="text-center py-8">
          <div className="animate-pulse text-gray-600">Loading best sellers...</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center py-8 text-red-600">
          Error loading best sellers: {error.message || "Something went wrong"}
        </div>
      );
    }

    if (!bestSeller?.length) {
      return (
        <div className="text-center py-8 text-gray-600">
          No best sellers available
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
        {bestSeller.map((product) => (
          <div
            key={product._id}
            className="w-full max-w-[350px]"
            role="listitem"
          >
            <CollectionCard data={product} classPadding="px-0" />
          </div>
        ))}
      </div>
    );
  }, [bestSeller, isLoading, error]);

  return (
    <section className="best-seller py-8 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="best-sellers-heading">
      <HeaderDashed
        head1="BEST"
        head2="SELLERS"
        paragraph="Discover our top-selling products, curated for quality and popularity."
        className="text-center mb-8"
      />
      <section className="mt-6">{content}</section>
    </section>
  );
};

export default BestSeller;
