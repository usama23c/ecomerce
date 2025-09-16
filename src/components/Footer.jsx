// import { Link, NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// // Import Tooltip directly from Bootstrap
// import { Tooltip } from "bootstrap";

// const Footer = () => {
// 	const [currentYear, setCurrentYear] = useState(null);

// 	// Set the current year
// 	const getCurrentYear = () => {
// 		const dateNow = new Date();
// 		setCurrentYear(dateNow.getFullYear());
// 	};

// 	useEffect(() => {
// 		// Initialize Bootstrap tooltips
// 		const tooltipTriggerList = document.querySelectorAll(
// 			'[data-bs-toggle="tooltip"]'
// 		);
// 		const tooltipList = [...tooltipTriggerList].map(
// 			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
// 		);

// 		getCurrentYear();

// 		// Cleanup tooltips on component unmount
// 		return () => {
// 			tooltipList.forEach((tooltip) => tooltip.dispose());
// 		};
// 	}, []);

// 	return (
// 		<footer className="mt-5 sec-padd" id="footer">
// 			<div className="container d-flex flex-wrap">
// 				<main className="col-12">
// 					<div className="row row-gap-5">
// 						{/* Logo and Description */}
// 						<article className="col-12 col-lg-6 text-center">
// 							<Link to="/" className="logo text-decoration-none text-dark">
// 								<h3 className="fs-3 mb-0">
// 									Algohary <span className="fw-medium c-pink">Shop</span>
// 								</h3>
// 							</Link>
// 							<p className="mt-3">
// 								WELCOME 
// 							</p>
// 						</article>

// 						{/* Social Links */}
// 						<div className="social col-12 col-lg text-center">
// 							<h3>COMPANY</h3>
// 							<ul className="ps-0 mt-3">
// 								<li>
// 									<NavLink
// 										to="/"
// 										className="text-decoration-none c-gray d-inline-block p-1 px-5"
// 									>
// 										Home
// 									</NavLink>
// 								</li>
// 								<li>
// 									<NavLink
// 										to="/about"
// 										className="text-decoration-none c-gray d-inline-block p-1 px-5"
// 									>
// 										About us
// 									</NavLink>
// 								</li>
// 								<li className="c-gray p-1">Delivery</li>
// 								<li className="c-gray p-1">Privacy Policy</li>
// 							</ul>
// 						</div>

// 						{/* Contact Information */}
// 						<div className="address col-12 col-lg text-center">
// 							<h3 className="mb-3">GET IN TOUCH</h3>
// 							<ul className="d-flex flex-column align-items-center align-items-lg-start ps-0 gap-2">
// 								<li className="c-gray">+92-3175422689</li>
// 								<li>
// 									<a
// 										className="c-gray text-decoration-none hover-underline"
// 										href="mailto:usamamahboob27@gmail.com"
// 										title="get in touch"
// 									>
// 										ahmedmaher.dev1@gmail.com
// 									</a>
// 								</li>
// 								<li>
// 									<a
// 										href="https://www.linkedin.com/"
// 										target="_blank"
// 										title="Go To LinkedIn"
// 										className="text-decoration-none c-gray"
// 									>
// 										LinkedIn
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 				</main>

// 				{/* Copyright Information */}
// 				<div className="copyrights border-t-gray mt-5 pt-4 col-12 text-center c-d-gray">
// 					Copyright @{currentYear}
// 					<a
// 						href="https://www.linkedin.com/"
// 						target="_blank"
// 						title="Go To LinkedIn"
// 						className="text-decoration-none c-black p-2 fw-bold"
// 						data-bs-toggle="tooltip"
// 						data-bs-placement="top"
// 					>
// 					Usama Mehboob
// 					</a>
// 					- All Rights Reserved.
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import { useEffect, useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { Tooltip } from "bootstrap";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Initialize tooltips
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );

    return () => {
      tooltipList.forEach((tooltip) => tooltip.dispose());
    };
  }, []);

  // Memoized social links and contact info for performance
  const companyLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { label: "Delivery", to: "/delivery" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
    []
  );

  const contactInfo = useMemo(
    () => [
      {
        icon: <FaPhone className="inline-block mr-2" />,
        label: "+92-3175422689",
        href: "tel:+923175422689",
        title: "Call us",
      },
      {
        icon: <FaEnvelope className="inline-block mr-2" />,
        label: "ahmedmaher.dev1@gmail.com",
        href: "mailto:ahmedmaher.dev1@gmail.com",
        title: "Email us",
      },
      {
        icon: <FaLinkedin className="inline-block mr-2" />,
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        title: "Visit our LinkedIn",
        target: "_blank",
      },
    ],
    []
  );

  return (
    <footer
      className="bg-gray-900 text-gray-200 py-12 px-4 sm:px-6 lg:px-8"
      role="contentinfo"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <Link to="/" className="text-2xl font-bold text-white no-underline">
            Algohary <span className="text-pink-400">Shop</span>
          </Link>
          <p className="mt-4 text-gray-400 text-sm">
            Discover quality fashion at Algohary Shop. Explore our curated
            collection for men, women, and kids.
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
          <ul className="space-y-2">
            {companyLinks.map(({ to, label }, index) => (
              <li key={index}>
                {to ? (
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-gray-400 hover:text-white transition-colors duration-200 no-underline ${
                        isActive ? "text-white font-medium" : ""
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                ) : (
                  <span className="text-gray-400">{label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <ul className="space-y-2">
            {contactInfo.map(({ icon, label, href, title, target }, index) => (
              <li key={index}>
                <a
                  href={href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center justify-center md:justify-start"
                  title={title}
                  target={target || "_self"}
                  rel={target ? "noopener noreferrer" : undefined}
                >
                  {icon}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright Information */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
        Copyright &copy; {currentYear}{" "}
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:text-pink-400 transition-colors duration-200"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          title="Visit Usama Mehboob's LinkedIn"
        >
          Usama Mehboob
        </a>{" "}
        - All Rights Reserved.
      </div>
    </footer>
  );
};

Footer.propTypes = {
  // No props are passed to this component, but PropTypes is included for consistency
};

export default Footer;
