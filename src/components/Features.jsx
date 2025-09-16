import SingleFeature from "./SingleFeature";
// Import Features Images
import exhangeImg from "../assets/download-f.png";
import qualityImg from "../assets/quality_icon.png";
import supportImg from "../assets/download-set.png";

const Features = () => {
	const featuresImgs = [exhangeImg, qualityImg, supportImg];
	const featuresContent = [
		{head: "Easy Exchange Policy", text: "We offer hassle free exchange policy"},
		{head: "7 Days Return Policy", text: "We provide 7 days free return policy"},
		{head: "Best Customer Support", text: "We provide 24/7 customer support"},
	]

	return (
		<section className="features d-flex flex-wrap text-center gap-5 column-gap-3 column-gap-lg-5 sec-padd">
			{/* Map through images and render SingleFeature component for each */}
			{featuresImgs.map((img, i) => (
				<SingleFeature key={i} img={img} classLayout="col-12 col-lg" head={featuresContent[i].head} text={featuresContent[i].text} />
			))}
		</section>
	);
};

export default Features;
