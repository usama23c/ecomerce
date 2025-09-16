const SingleFeature = ({ img, classLayout, head, text }) => {
	return (
		<article
			className={`d-flex flex-column gap-2 align-items-center ${classLayout}`}
			data-aos="fade-up"
     data-aos-anchor-placement="center-center"
		>
			{/* Feature Image */}
			<img src={img} alt="Easy Exchange" className="col-1 col-lg-2" />

			{/* Feature Title */}
			<h4 className="mt-2 mb-0 fw-bold">{head}</h4>

			{/* Feature Description */}
			<p className="c-gray">{text}</p>
		</article>
	);
};

export default SingleFeature;
