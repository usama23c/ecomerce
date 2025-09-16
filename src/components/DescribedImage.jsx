
// const DescribedImage = ({img, imgTitle, sideText, styleImg, styleText, styleInLarge}) => {
// 	return (
// 		<section className="described-img mt-405 mb-4 mt-lg-5">
// 			<div className={`row align-items-lg-center row-gap-4 ${styleInLarge}`}>
				
// 				{/* Display image with dynamic classes */}
// 				<img
// 					className={`col-12 col-md-6 ${styleImg}`}
// 					src={img}
// 					alt={imgTitle}
// 				/>
// 				{/* Display descriptive text beside the image */}
// 				<article className={`col-12 col-md-6 text-start c-mm-gray ${styleText}`}>
//                     {sideText}
// 				</article>
// 			</div>
// 		</section>
// 	);
// };

// export default DescribedImage;


import { useState, useMemo } from "react";
import PropTypes from "prop-types";

const DescribedImage = ({ img, imgTitle, sideText, styleImg = "", styleText = "", styleInLarge = "" }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Handle image load
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Memoized content to prevent unnecessary re-renders
  const content = useMemo(() => (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 items-center ${styleInLarge}`}>
      <figure className="relative w-full aspect-w-16 aspect-h-9">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" aria-hidden="true" />
        )}
        <img
          src={img || "/placeholder-image.jpg"}
          alt={imgTitle || "Descriptive image"}
          className={`w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300 ${isImageLoaded ? "opacity-100" : "opacity-0"} ${styleImg}`}
          onLoad={handleImageLoad}
          onError={() => setIsImageLoaded(true)}
          loading="lazy"
        />
      </figure>
      <article className={`text-start text-gray-700 prose prose-lg max-w-none ${styleText}`}>
        {sideText || "No description provided"}
      </article>
    </div>
  ), [img, imgTitle, sideText, styleImg, styleText, isImageLoaded]);

  return (
    <section className="described-img py-8 px-4 sm:px-6 lg:px-8 my-6 md:my-10" role="region" aria-labelledby="described-image-title">
      {imgTitle && (
        <h2 id="described-image-title" className="sr-only">
          {imgTitle}
        </h2>
      )}
      {content}
    </section>
  );
};

DescribedImage.propTypes = {
  img: PropTypes.string,
  imgTitle: PropTypes.string,
  sideText: PropTypes.node,
  styleImg: PropTypes.string,
  styleText: PropTypes.string,
  styleInLarge: PropTypes.string,
};

export default DescribedImage;
