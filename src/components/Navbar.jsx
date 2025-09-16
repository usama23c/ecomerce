// Import React Router and React
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Tooltip } from "bootstrap"; 
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);
	
	const [showBorder, setShowBorder] = useState(true);
	const [showSearchIcon, setSearchIcon] = useState(false);
	const {setActiveSearch} = useContext(ShopContext);
	
	const path = window.location.pathname
	// useEffect(() => {
	// 	localStorage.setItem('activeSearch', activeSearch);
	// 	// console.log(localStorage.getItem('activeSearch'));
	// }, [activeSearch]) 

	useEffect(() => {
		setShowBorder(path !== "/");
		setSearchIcon(path === "/collection")
	}, [path])

	useEffect(() => {
		// Initialize Bootstrap tooltips
		const tooltipTriggerList = document.querySelectorAll(
			'[data-bs-toggle="tooltip"]'
		);
		const tooltipList = [...tooltipTriggerList].map(
			(tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
		);

		// Cleanup tooltips on component unmount
		return () => {
			tooltipList.forEach((tooltip) => tooltip.dispose());
		};
	}, []);

	return (
		<nav className="py-3">
			<div className={`container position-relative  d-flex justify-content-between align-items-center flex-column ${showBorder? 'showLine' : ''}`}>
				<main className="col-12 d-flex justify-content-between align-items-center">
				{/* Logo */}
				<Link to="/" className="logo text-decoration-none text-dark">
					<h3 className="fs-5 mb-0">Algohary <span className="fw-medium c-pink">Shop</span></h3>
				</Link>

				{/* Mobile Menu */}
				<ul
					className={`position-fixed p-0 top-0 end-0 z-1 d-flex flex-column ${
						showMenu ? "show" : ""
					}`}
				>
					<li
						onClick={() => setShowMenu((prev) => !prev)}
						className="backMenu p-1 py-2 d-flex fs-5 fw-bold c-light-gray align-items-center border-bottom cursor"
					>
						<i className="bx bx-chevron-left fs-big c-light-gray"></i> Back
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/"
						>
							HOME
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/collection"
						>
							COLLECTION
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/about"
						>
							ABOUT
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="text-decoration-none c-gray fw-bold p-4 py-2 d-block border-bottom"
							to="/contact"
						>
							CONTACT
						</NavLink>
					</li>
					<li>
						<NavLink
							onClick={() => setShowMenu((prev) => !prev)}
							className="admin-panel-btn btn  rounded-pill mt-3 text-decoration-none c-gray p-3 py-2 d-block border-gray"
							to="/admin-panel"
						>
							ADMIN PANEL
						</NavLink>
					</li>
				</ul>

				{/* Right Side Icons */}
				<div className="right d-flex align-items-center gap-1 gap-sm-3">
					<div className="icons d-flex gap-1 gap-sm-3">
						{showSearchIcon && 
							<i className="bx bx-search-alt-2 fs-little-big c-gray cursor" onClick={() => setActiveSearch(true)}></i>
						}
						<NavLink className="login-link text-deoration-none" to="/login" data-bs-toggle="tooltip"
						data-bs-placement="bottom" data-bs-title="Login">
							<i className="bx bx-user fs-little-big c-gray cursor"></i>
						</NavLink>
						<button className="bg-transparent border-0 position-relative">
							<i className="bx bx-shopping-bag fs-little-big c-gray cursor"></i>
							<span className="bg-black d-block rounded-circle cart-icon c-white">
								0
							</span>
						</button>
					</div>
					<button
						onClick={() => setShowMenu((prev) => !prev)}
						className="px-0 toggleBtn bg-transparent border-0"
						role="button"
					>
						<i className="bx bx-menu-alt-right fs-big c-gray"></i>
					</button>
				</div>
				</main>
			</div>
		</nav>
	);
};

export default Navbar;
