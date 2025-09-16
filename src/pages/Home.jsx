import MixedAutoSlider from "../components/MixedAutoSlider";
import SubscriptionForm from "../components/SubscriptionForm";
import Features from "../components/Features";
import LatestCollections from "../components/LatestCollections";
import { motion } from "framer-motion";
import BestSeller from "../components/BestSeller";







// Dummy Fixed Data:
// import productsData from "../components/FixedData";


const Home = () => {
	
	
	// const [loading, setLoading] = useState(true);
	// const [errorInFetch, setErrorInFetch] = useState(null);
	// const [data, setData] = useState([]);
	





	// Fetch data for collections
	// useEffect(() => {
	// 	// fetch("https://ahmed-maher77.github.io/Forever__Modern-E-Commerce-Web-Application-with-ReactJS-and-Bootstrap/db.json/products")      // http://localhost:3000/products
	// 	// 	.then((res) => res.json())
	// 	// 	.then((json) => {
	// 	// 		console.log('from github server', json);
				
	// 	// 		setData(json);
	// 	// 		setLoading(false);
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		setErrorInFetch(error);
	// 	// 		setLoading(false);
	// 	// 	});
	// 	setData(productsData);
	// 	setLoading(false);
	// }, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="home-page text-center"
		>
			<div className="container">
				<MixedAutoSlider  />

				<LatestCollections/>
				
				<BestSeller />
				
				<Features />

				<SubscriptionForm />
			</div>
		</motion.section>
	);
};

export default Home;
