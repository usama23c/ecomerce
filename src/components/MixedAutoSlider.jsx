// Import Slider Images
import slide_1_img from "../assets/slide-1.jpg";
import slide_2_img from "../assets/slide-2.jpg";
import slide_3_img from "../assets/slide-3.jpg";
import slide_4_img from "../assets/slide-4.jpg";
import slide_5_img from "../assets/alide-5.jpg";
import slide_6_img from "../assets/slide-6.jpg";
import slide_7_img from "../assets/slide-7.jpg";
import slide_8_img from "../assets/slide-8.jpg";
import slide_9_img from "../assets/slide-9.jpg";
import slide_10_img from "../assets/slide-10.jpg";
import { useEffect, useState } from "react";

const MixedAutoSlider = () => {
	const sliderImages = [slide_9_img, slide_7_img, slide_8_img, slide_1_img, slide_2_img, slide_3_img, slide_4_img, slide_5_img, slide_6_img, slide_10_img];
	const [activeSlide, setActiveSlide] = useState(0);

	// Auto-slide functionality for the image slider
	useEffect(() => {
		const slideInterval = setInterval(() => {
			setActiveSlide((prev) => {
				return prev >= sliderImages.length - 1 ? 0 : prev + 1;
			});
		}, 2500);

		return () => clearInterval(slideInterval); // Cleanup interval on unmount
	}, [sliderImages.length]);

	return (
		<section className="mixed-slider">
			{/* Map through images to create slides */}
			<div className="border-05 p-0 overflow-hidden flex-wrap d-flex">
				{/* Text section for the current slide */}
				<article className="text py-5 m-auto col-12 col-md-6">
					<div className="fit-content m-auto">
						<header className="d-flex align-items-center gap-2 ">
							<span className="fw-bold line-span bg-gray"></span>
							<span className="fw-bold c-gray">OUR BESTSELLERS</span>
						</header>
						<h2 className="playflair-font fs-big my-3 playflair-l-font">
							Latest Arrivals
						</h2>
						<footer className="d-flex align-items-center gap-2 ">
							<button
								className="btn fit-content fw-bold c-gray p-0"
								role="button"
							>
								SHOP NOW
							</button>
							<span className="fw-bold line-span bg-gray"></span>
						</footer>
					</div>
				</article>
				{/* Image section for the current slide */}
				{sliderImages.map((img, index) => (
					<img
						key={index}
						className={`col-12 col-md-6 d-block mh-450 d-block ${
							activeSlide == index ? " animateSlide" : "d-none"
						}`}
						src={img}
						alt="One of the latest arrivals products"
					/>
				))}
			</div>
		</section>
	);
};

export default MixedAutoSlider;
