// import SingleFeature from "./SingleFeature";
// // Import Features Images
// import exhangeImg from "../assets/download-f.png";
// import qualityImg from "../assets/quality_icon.png";
// import supportImg from "../assets/download-set.png";

// const Features = () => {
// 	const featuresImgs = [exhangeImg, qualityImg, supportImg];
// 	const featuresContent = [
// 		{head: "Easy Exchange Policy", text: "We offer hassle free exchange policy"},
// 		{head: "7 Days Return Policy", text: "We provide 7 days free return policy"},
// 		{head: "Best Customer Support", text: "We provide 24/7 customer support"},
// 	]

// 	return (
// 		<section className="features d-flex flex-wrap text-center gap-5 column-gap-3 column-gap-lg-5 sec-padd">
// 			{/* Map through images and render SingleFeature component for each */}
// 			{featuresImgs.map((img, i) => (
// 				<SingleFeature key={i} img={img} classLayout="col-12 col-lg" head={featuresContent[i].head} text={featuresContent[i].text} />
// 			))}
// 		</section>
// 	);
// };

// export default Features;


import { useMemo } from "react";
import PropTypes from "prop-types";
import SingleFeature from "./SingleFeature";
import exhangeImg from "../assets/download-f.png";
import qualityImg from "../assets/quality_icon.png";
import supportImg from "../assets/download-set.png";

const Features = () => {
  const featuresData = useMemo(
    () => [
      {
        img: exhangeImg,
        head: "Easy Exchange Policy",
        text: "Hassle-free exchanges to ensure your satisfaction.",
      },
      {
        img: qualityImg,
        head: "7 Days Return Policy",
        text: "Enjoy a worry-free 7-day return period.",
      },
      {
        img: supportImg,
        head: "Best Customer Support",
        text: "24/7 dedicated support for all your needs.",
      },
    ],
    []
  );

  return (
    <section
      className="features py-12 px-4 sm:px-6 lg:px-8 bg-gray-50"
      role="region"
      aria-labelledby="features-heading"
    >
      <h2 id="features-heading" className="sr-only">
        Our Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {featuresData.map((feature, index) => (
          <SingleFeature
            key={`feature-${index}`}
            img={feature.img}
            classLayout="w-full"
            head={feature.head}
            text={feature.text}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

Features.propTypes = {
  featuresData: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      head: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default Features;
