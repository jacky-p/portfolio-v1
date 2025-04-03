const INFO = {
	main: {
		title: "Reactfolio by truethari",
		name: "Jacqueline P.",
		email: "jackyyp2402@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://linkedin.com/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack software engineer.",
		description:
			"As a recent graduate with a BS in Electrical Engineering and Computer Science, I’ve gained hands-on experience working with various programming languages across different areas of software development. I’m passionate about continuous learning and eager to dive deeper into programming projects as I begin my career as a software engineer. With a strong foundation in both hardware and software, I’m excited to contribute, grow, and take on new challenges in the tech field.",
	},

	about: {
		title: "I’m Jacqueline P. I live in California, where I design the future.",
		description:
			"With a BS in Electrical Engineering and Computer Science, I’ve had the opportunity to work with a wide range of programming languages and contribute to various stages of software development. From building applications to troubleshooting and optimizing code, I’ve gained practical experience in both the technical and problem-solving aspects of software engineering. I’m deeply committed to continuous learning, and as I begin my career, I’m excited to take on new challenges and contribute to meaningful projects while further refining my skills as a software engineer.",
	
	},


	projects: [
		{
			title: "NEST Meet",
			description:
				"A web-based application that automates intern schedule generation based on customizable filters, such as department, location, and unique pairing. Designed to streamline intern assignments while ensuring diversity in pairings.",
			techStack: {
				frontend: "HTML, CSS, JavaScript",
				logicAlgorithm: "JavaScript for dynamic schedule generation",
				backend: "(Optional Future Enhancements): Firebase/Google Sheets for data storage"
			},
			motivation: "Manually scheduling interns while maintaining balanced and diverse pairings across departments and locations can be time-consuming and error-prone. This project aims to automate the process, ensuring fair distribution while reducing scheduling conflicts.",
			features: ["Upload or input a list of interns", "Filter schedules by department, location, or both", "Ensure interns are uniquely paired across departments/locations", "Dynamically generate and display schedules in a user-friendly format", "Export schedules as an CSV"],
			challenges: [
				{
					challenge: "Ensuring unique pairings",
					description: "Used a combination of sorting and randomization algorithms to prevent duplicate pairings while meeting filter criteria."
				},
				{
					challenge: "Scalability",
					description: "Designed logic to accommodate varying numbers of interns and customizable parameters.",
				}
			],
			impact: ["Eliminates manual scheduling efforts.", "Ensures balanced and diverse intern interactions.", "Provides a flexible and efficient scheduling system."],
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://bizznest.github.io/salinas-bizznest-scheduler/",
			gitRepo: "https://github.com/",
			images: [
				{
					src: "nestmeet1.png",
					caption: "Interns must be selected to generate pairings"
				},
				{
					src: "nestmeet2.png",
					caption: "Users can select any combination of pairings"
				},
				{
					src: "nestmeet3.png",
					caption: "Edit pairings after they have been generated"
				},
			],
		},

		{
			title: "AI Pacman",
			description:
				"Implementing AI techniques like search algorithms, probabilistic reasoning, and machine learning to design intelligent agents that navigate and interact within the Pac-Man game environment.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com",
		},

	],
};

export default INFO;
