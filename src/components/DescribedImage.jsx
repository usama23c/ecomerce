
const DescribedImage = ({img, imgTitle, sideText, styleImg, styleText, styleInLarge}) => {
	return (
		<section className="described-img mt-405 mb-4 mt-lg-5">
			<div className={`row align-items-lg-center row-gap-4 ${styleInLarge}`}>
				
				{/* Display image with dynamic classes */}
				<img
					className={`col-12 col-md-6 ${styleImg}`}
					src={img}
					alt={imgTitle}
				/>
				{/* Display descriptive text beside the image */}
				<article className={`col-12 col-md-6 text-start c-mm-gray ${styleText}`}>
                    {sideText}
				</article>
			</div>
		</section>
	);
};

export default DescribedImage;
