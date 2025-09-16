import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Importing styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "boxicons/css/boxicons.min.css";
import "./App.css";

// Importing pages and components
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";

// Importing hooks and animations
import { useContext, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Login from "./pages/Login";
import SearchBar from "./components/SearchBar";
import { ShopContext } from "./context/ShopContext";


function App() {
	// Get current location
	const location = useLocation();
	const { pathname } = location;
	const {activeSearch} = useContext(ShopContext);

	// Scroll to top on route change
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	
	// const search = localStorage.getItem('activeSearch');
	// useEffect(() => {
		
	// 	console.log(localStorage.getItem('activeSearch'));
		
		
		
	// }, [search]) 

	return (
		<div className="App">
			<Navbar />
			{activeSearch && <SearchBar />}
			
			<AnimatePresence>
				{/* Render routes with animations */}
				<Routes location={location} key={location.pathname}>
					<Route path="/" element={<Home />} />
					<Route path="/collection" element={<Collection />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/admin-panel" element={<AdminPanel />} />
					<Route path="/login" element={<Login />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="/products/:productId" element={<ProductDetails />} />
					<Route path="/place-order" element={<PlaceOrder />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</AnimatePresence>

			<Footer />
		</div>
	);
}

export default App;
