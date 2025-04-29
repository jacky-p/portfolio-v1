import { motion } from "framer-motion";

const StaggeredTitle = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ staggerChildren: 0.3 }}
		>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				Welcome
			</motion.h1>
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
			>
				to My Website
			</motion.h2>
		</motion.div>
	);
};

export default StaggeredTitle;
