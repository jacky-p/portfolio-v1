import { Typewriter } from "react-simple-typewriter";
//import "react-simple-typewriter/dist/index.css";

const Intro = () => {
	return (
		<h4>
			<Typewriter
				words={[
					"Hola!",
					"I'm Jacqueline Perez",
					"Welcome to my site",
					"Code meets creativity",
				]}
				loop={true}
				cursor
				cursorStyle="|"
				typeSpeed={70}
				deleteSpeed={50}
				delaySpeed={1000}
			/>
		</h4>
	);
};

export default Intro;
