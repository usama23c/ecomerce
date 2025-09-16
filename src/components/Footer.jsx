import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// Import Tooltip directly from Bootstrap
import { Tooltip } from "bootstrap";

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(null);

	// Set the current year
	const getCurrentYear = () => {
		const dateNow = new Date();
		setCurrentYear(dateNow.getFullYear());
	};

	useEffect(() => {
		// Initialize Bootstrap tooltips
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
		);

		getCurrentYear();

		// Cleanup tooltips on component unmount
		return () => {
			tooltipList.forEach((tooltip) => tooltip.dispose());
		};
	}, []);

	return (
		<footer className="mt-5 sec-padd" id="footer">
			<div className="container d-flex flex-wrap">
				<main className="col-12">
					<div className="row row-gap-5">
						{/* Logo and Description */}
						<article className="col-12 col-lg-6 text-center">
							<Link to="/" className="logo text-decoration-none text-dark">
								<h3 className="fs-3 mb-0">
									Algohary <span className="fw-medium c-pink">Shop</span>
								</h3>
							</Link>
							<p className="mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard
								dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type specimen book.
							</p>
						</article>

						{/* Social Links */}
						<div className="social col-12 col-lg text-center">
							<h3>COMPANY</h3>
							<ul className="ps-0 mt-3">
								<li>
									<NavLink
										to="/"
										className="text-decoration-none c-gray d-inline-block p-1 px-5"
									>
										Home
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/about"
										className="text-decoration-none c-gray d-inline-block p-1 px-5"
									>
										About us
									</NavLink>
								</li>
								<li className="c-gray p-1">Delivery</li>
								<li className="c-gray p-1">Privacy Policy</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="address col-12 col-lg text-center">
							<h3 className="mb-3">GET IN TOUCH</h3>
							<ul className="d-flex flex-column align-items-center align-items-lg-start ps-0 gap-2">
								<li className="c-gray">+1-000-000-0000</li>
								<li>
									<a
										className="c-gray text-decoration-none hover-underline"
										href="mailto:ahmedmaher.dev1@gmail.com"
										title="get in touch"
									>
										ahmedmaher.dev1@gmail.com
									</a>
								</li>
								<li>
									<a
										href="https://www.linkedin.com/in/ahmed-maher-algohary"
										target="_blank"
										title="Go To LinkedIn"
										className="text-decoration-none c-gray"
									>
										LinkedIn
									</a>
								</li>
							</ul>
						</div>
					</div>
				</main>

				{/* Copyright Information */}
				<div className="copyrights border-t-gray mt-5 pt-4 col-12 text-center c-d-gray">
					Copyright @{currentYear}
					<a
						href="https://www.linkedin.com/in/ahmed-maher-algohary"
						target="_blank"
						title="Go To LinkedIn"
						className="text-decoration-none c-black p-2 fw-bold"
						data-bs-toggle="tooltip"
						data-bs-placement="top"
					>
						Ahmed Maher
					</a>
					- All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
