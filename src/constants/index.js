import {
	abbott,
	backend,
	cifradocesar,
	creator,
	css,
	daniel,
	edel,
	favoritesapp,
	firebase,
	git,
	html,
	javascript,
	logoqubo,
	mobile,
	mysql,
	nestjs,
	nodejs,
	portfolio,
	portfolio2,
	reactjs,
	redux,
	roberth,
	sqlserver,
	traveladvisor,
	typescript,
	web,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
	{
		id: 'cv',
		title: 'Currículum',
	},
];

const icons = [
	{ name: 'logo-linkedin', link: import.meta.env.VITE_APP_SOCIAL_MEDIA_LINKEDIN },
	{ name: 'logo-github', link: import.meta.env.VITE_APP_SOCIAL_MEDIA_GITHUB },
	{ name: 'logo-gitlab', link: import.meta.env.VITE_APP_SOCIAL_MEDIA_GITLAB },
	{ name: 'logo-whatsapp', link: import.meta.env.VITE_APP_SOCIAL_MEDIA_WHATSAPP },
	{ name: 'logo-instagram', link: import.meta.env.VITE_APP_SOCIAL_MEDIA_INSTAGRAM },
	{ name: 'logo-facebook', link: import.meta.env.VITE_APP_SOCIAL_MEDIA_FACEBOOK },
];

const services = [
	{
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Backend Developer',
		icon: backend,
	},
	{
		title: 'Database Developer',
		icon: creator,
	},
	{
		title: 'Full Stack Developer',
		icon: mobile,
	},
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'TypeScript',
		icon: typescript,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},
	{
		name: 'Redux Toolkit',
		icon: redux,
	},
	{
		name: 'SQL Server',
		icon: sqlserver,
	},
	{
		name: 'Node JS',
		icon: nodejs,
	},
	{
		name: 'My SQL',
		icon: mysql,
	},
	{
		name: 'Nest JS',
		icon: nestjs,
	},
	{
		name: 'git',
		icon: git,
	},
	// {
	// 	name: 'figma',
	// 	icon: figma,
	// },
	{
		name: 'Firebase',
		icon: firebase,
	},
];

const experiences = [
	{
		title: 'Full stack Developer',
		company_name: 'Abbot - Abbox',
		icon: abbott,
		iconBg: '#009CDD',
		date: 'Sept 2020 - Dec 2022',
		points: [
			'Developing and maintaining web applications using Angular.js, Node.js and other related technologies like Typescript',
			'Involved in backend development integrating the backend system to the Database using SQLServer.',
			'Worked with Source Control Repository System, using Git to manage the source code.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
		],
	},
	{
		title: 'Full stack Developer',
		company_name: 'Qubo Systems S.A',
		icon: logoqubo,
		iconBg: '#171717',
		date: 'Jan 2021 - Jul 2023',
		points: [
			'I got the opportunity to be involved in projects from the beginning to the end.',
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Involved in backend development projects using Node.js + Typescript and created API services using frameworks as Nest.js with TypeORM.',
			'Involved in backend development integrating the backend system to the Database using SQLServer, MySql and Firebase too.',
			'Worked with Source Control Repository System, using Git to manage the source code.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Manuel is a talented developer who is always willing to go the extra mile to get the job done. I highly recommend him and I'm sure that he is a great addition to any team also.",
		name: 'Edel Agüero',
		designation: 'CEO',
		company: 'Qubo Systems S.A',
		image: edel,
	},
	{
		testimonial:
			"He is a good person, proactive and not afraid to take a challenge. I had the opportunity to know him at university as student. I'm sure he will be a great addition for any company.",
		name: 'Roberth Solís',
		designation: 'Senior Python Developer',
		company: 'Gorilla Logic',
		image: roberth,
	},
	{
		testimonial:
			'Manuel is a hard worker person, selfreliance, proactive and not afraid to take a challenge. I had the opportunity to work with him and im sure he will be a great addition for any company.',
		name: 'Daniel Jirón',
		designation: 'Senior Software Engineer',
		company: 'Sapiens Corp',
		image: daniel,
	},
];

const projects = [
	{
		name: 'Travel Advisor',
		description:
			'It is a website adaptable to all devices using Google Maps. With Geolocation, Google Maps API, Searching for places, Fetching restaurants, hotels and attractions based on location from specialized Rapid APIs, data filtering and much more.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'restapi',
				color: 'green-text-gradient',
			},
			{
				name: 'tailwindcss',
				color: 'pink-text-gradient',
			},
		],
		image: traveladvisor,
		source_code_link: 'https://github.com/manuelmontero94/travel-advisor',
		page: 'https://travel-advisor.monteromanuel.com',
	},
	{
		name: '3D Personal Portfolio',
		description:
			"This is a responsive portfolio website. Its was create using differents technologies and libraries like: react.js, three.js and framer motion. Besides, it has a beautiful user interface. Also, it has 3D animations into some sections. It's a really cool website ",
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'threejs',
				color: 'green-text-gradient',
			},
			{
				name: 'framermotion',
				color: 'pink-text-gradient',
			},
		],
		image: portfolio2,
		source_code_link: 'https://github.com/manuelmontero94/3d_portfolio',
		page: 'https://www.monteromanuel.com',
	},
	{
		name: 'Favorites App',
		description:
			"It's a responsive website using react. It contains a table of favorites, using react hooks and react redux. The table contains a search bar to filter the information. At the same time, it has pagination to show the information in a better way. ",
		tags: [
			{
				name: 'reactjs',
				color: 'blue-text-gradient',
			},
			{
				name: 'redux',
				color: 'green-text-gradient',
			},
			{
				name: 'materialui',
				color: 'pink-text-gradient',
			},
		],
		image: favoritesapp,
		source_code_link: 'https://github.com/manuelmontero94/favoritesApp',
		page: 'https://favorites-app.monteromanuel.com',
	},

	{
		name: 'Personal Portfolio',
		description:
			'This is a responsive portfolio website using Html, Css and JavaScript, with a beautiful user interface. It contains different components like Header, Home, About, Skills, Qualification, Services, Project in mind, Testimonial, Contact and the Footer too.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: portfolio,
		source_code_link: 'https://github.com/manuelmontero94/personal_portfolio',
		page: 'https://first-portfolio.monteromanuel.com',
	},

	{
		name: 'Cesar Encryption',
		description:
			"It's a simple method of encoding messages. Caesar ciphers use a substitution method where letters in the alphabet are shifted by some fixed number of spaces to yield an encoding alphabet. It was build with HTML, CSS and JavaScript also.",
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: cifradocesar,
		source_code_link: 'https://github.com/manuelmontero94/cifrado-cesar',
		page: 'https://cesar-encryption.monteromanuel.com',
	},
];

export { icons, services, technologies, experiences, testimonials, projects };
