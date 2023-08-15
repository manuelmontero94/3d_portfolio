import {
	backend,
	carrent,
	creator,
	css,
	docker,
	figma,
	git,
	html,
	javascript,
	jobit,
	meta,
	mobile,
	mongodb,
	nodejs,
	reactjs,
	redux,
	shopify,
	starbucks,
	tailwind,
	tesla,
	threejs,
	tripguide,
	typescript,
	web,
	sqlserver,
	mysql,
	nestjs,
	firebase,
	cifradocesar,
	traveladvisor,
	portfolio,
	favoritesapp,
	portfolio2,
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
		title: 'React.js Developer',
		company_name: 'Starbucks',
		icon: starbucks,
		iconBg: '#383E56',
		date: 'March 2020 - April 2021',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'React Native Developer',
		company_name: 'Tesla',
		icon: tesla,
		iconBg: '#E6DEDD',
		date: 'Jan 2021 - Feb 2022',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Web Developer',
		company_name: 'Shopify',
		icon: shopify,
		iconBg: '#383E56',
		date: 'Jan 2022 - Jan 2023',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
			'Participating in code reviews and providing constructive feedback to other developers.',
		],
	},
	{
		title: 'Full stack Developer',
		company_name: 'Meta',
		icon: meta,
		iconBg: '#E6DEDD',
		date: 'Jan 2023 - Present',
		points: [
			'Developing and maintaining web applications using React.js and other related technologies.',
			'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
			'Implementing responsive design and ensuring cross-browser compatibility.',
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
		image:
			'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/70784167_10214619900043121_3113283361779482624_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=xrpmkEaaZP8AX9Iirgt&_nc_ht=scontent-mia3-1.xx&oh=00_AfCHwyZkW7-gH7oD2t2GSG3fI2s_JAkp_hrF9UBC01gfUQ&oe=64FD6E35',
	},
	{
		testimonial:
			"He is a good person, proactive and not afraid to take a challenge. I had the opportunity to know him at university as student. I'm sure he will be a great addition for any company.",
		name: 'Roberth Solís',
		designation: 'Senior Python Developer',
		company: 'Gorilla Logic',
		image:
			'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/271901877_1364365900680150_60369834758683314_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=be3454&_nc_ohc=9Zs-pJitUM0AX-pwKp-&_nc_ht=scontent-mia3-2.xx&oh=00_AfATSawfzQOI9oSRCVA0xcYhp5KfAhC1oyu40V0-3K71Qg&oe=64DB621B',
	},
	{
		testimonial:
			'Manuel is a hard worker person, selfreliance, proactive and not afraid to take a challenge. I had the opportunity to work with him and im sure he will be a great addition for any company.',
		name: 'Daniel Jirón',
		designation: 'Senior Software Engineer',
		company: 'Sapiens Corp',
		image:
			'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/223563096_6098992106785240_8451777181952687049_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=F2XYUqgwg2YAX_CGj7U&_nc_ht=scontent-mia3-2.xx&oh=00_AfASBhymSHPgXKrRWeDKHnWgss8Xr4XR2k8iIibR5FQRiw&oe=64DA3FED',
	},
];

const projects = [
	// {
	// 	name: 'Car Rent',
	// 	description:
	// 		'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
	// 	tags: [
	// 		{
	// 			name: 'react',
	// 			color: 'blue-text-gradient',
	// 		},
	// 		{
	// 			name: 'mongodb',
	// 			color: 'green-text-gradient',
	// 		},
	// 		{
	// 			name: 'tailwind',
	// 			color: 'pink-text-gradient',
	// 		},
	// 	],
	// 	image: carrent,
	// 	source_code_link: 'https://github.com/',
	// },
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
	},
	{
		name: '3D Personal Portfolio',
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
		image: portfolio2,
		source_code_link: 'https://github.com/manuelmontero94/cifrado-cesar',
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
		source_code_link: 'https://github.com/',
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
		source_code_link: 'https://github.com/',
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
	},
];

export { icons, services, technologies, experiences, testimonials, projects };
