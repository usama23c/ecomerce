import { motion } from "framer-motion";

const NotFound = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="notfound-page d-flex justify-content-center align-items-center"
			style={{ height: "100vh" }}
		>
			<h1 className="text-center mb-0 lh-base">
				OOPs 😥😥! <br /> This Page is not found
			</h1>
		</motion.div>
	);
};

export default NotFound;
