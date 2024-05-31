import { RiGithubFill, RiTwitterXFill, RiLinkedinFill, RiTreasureMapFill } from "react-icons/ri";
import { PiMediumLogoFill } from "react-icons/pi";
import cooked1 from '../images/cooked/banner.png';
import cooked2 from '../images/cooked/dashboard.png';
import cooked3 from '../images/cooked/admin.png';
import bot1 from '../images/bot/bot.png';
import bot2 from '../images/bot/cooked_aio.png';
import bot3 from '../images/bot/raffle.png';
import bot4 from '../images/bot/loket.jpg';
import bot5 from '../images/bot/loket_cloudflare.jpg';
import bot6 from '../images/bot/tiket.png';
import bot7 from '../images/bot/ticketmaster.jpg';
import bot8 from '../images/bot/footlocker_checkout.png';
import champions from '../images/champions/cl.jpg';
import soccer from '../images/champions/soccer.png';
import art from '../images/art/art.png';
import resy1 from '../images/resy/resy.png';
import resy2 from '../images/resy/resy2.png';
import resy3 from '../images/resy/resy3.png';
import resy4 from '../images/resy/resy_email.png';
import site1 from '../images/site/react.png';
import fileart from "../constants/Capstone_Project_Sean_Wiryadi.pdf";
import soccerpy from "../constants/championsleague.ipynb";
import nlp from '../images/nlp/nlp.png';
import music1 from '../images/music/music.png';
import music2 from '../images/music/actual.png';
import music3 from '../images/music/prediction.png';

const INFO = {
	projects: [
		{
			title: "Cooked Indonesia",
			slug: "cooked",
			description:
				"A monthly subscription service I designed for Indonesian sneaker enthusiasts, offering extensive information and updates on new and upcoming sneakers.\nThe platform includes various tools and programs as part of its service, enhancing the user experience for sneaker aficionados.\nI personally developed all aspects of this project, including web scrapers, Python applications which includes checkout softwares, account generators, and a comprehensive website with a member dashboard to manage subscriptions and payments.",
			moreinfo: [
					{ url: "https://cookedid.com/en", text: "Cooked Website" }
				  ],
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png","https://www.cdnlogo.com/logos/m/78/mysql.svg"],
			img: cooked1, //Image thumbnail
			linkText: "View Project",
			link: "/project/cooked",
			images: [
				cooked1,cooked2,cooked3
			]
		},
		{
			title: "Automation Program for Exclusive Sneakers and Concert Tickets",
			slug: "automation",
			description:
				"I developed an advanced automation program specifically designed to facilitate seamless purchases of limited-edition sneakers and concert tickets.\nThis program was significantly enhanced by integrating multi-threading techniques, which improved its performance, along with the use of proxies and captcha bypass methods to optimize functionality.\nAdditionally, I implemented robust error-handling mechanisms within the software to ensure high success rates, thereby making it a reliable tool for users seeking to acquire these highly sought-after items.",
			moreinfo: [
				{ url: "https://github.com/sean292002/FootlockerIndonesiaBot", text: "Github Code - Footlocker" }
			],
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png","https://www.cdnlogo.com/logos/m/78/mysql.svg"],
			img: bot1,
			linkText: "View Project",
			link: "/project/automation",
			images: [
				bot2,bot3,bot4,bot5,bot6,bot7,bot8
			]
		},
		{
			title: "Automation Program for Resy's Reservation",
			slug: "resy",
			description:
				"I engineered an automation program to secure highly sought-after restaurant reservations, focusing on high-demand venues accessible through Resy.\nThis software tool is designed to automate the reservation process, efficiently navigating the platform's booking system. Key enhancements include multi-threading and proxies to improve efficiency.\nAdditionally, I developed a notification system that alerts users promptly when their desired timeslot becomes available, utilizing the Resy API for real-time updates and accuracy.",
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png","https://www.cdnlogo.com/logos/m/78/mysql.svg"],
			img: resy2,
			linkText: "View Project",
			link: "/project/resy",
			images: [
				resy2,resy3,resy4
			]
		},
		// {
		// 	title: "Football Champions League Analysis",
		// 	slug: "champions-league",
		// 	description:
		// 		"In my project, I focused on identifying the top forwards in the Champions League season for 2023-2024, analyzing them based on a variety of factors.\nThe initial step involved scraping data from FBRef.com, which I then meticulously cleaned, specifically filtering for forwards.\nTo simplify the complex dataset, I first applied Principal Component Analysis (PCA) to reduce the number of factors. This was followed by employing KMeans clustering, guided by the Kaiser criterion, which effectively categorized the forwards into two distinct groups.\nThe crux of my analysis was the development of an index, derived from the weightages of each factor in the PCA. This index served as a benchmark to rank the players, with the highest index indicating the most impactful player in terms of their overall contribution to the Champions League this season.",
		// 	moreinfo: [
		// 			{ url: soccerpy, text: "Champions League Code" },
		// 			{ url: soccerpy, text: "Champions League Data Set" },
		// 			{ url: soccerpy, text: "Champions League Analysis" }
		// 		  ],
		// 	logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png","https://www.cdnlogo.com/logos/m/78/mysql.svg"],
		// 	img: soccer,
		// 	linkText: "View Project",
		// 	link: "/project/champions-league",
		// 	images: [
		// 		soccer
		// 	]
		// },
		// {
		// 	title: "Art Preference Analysis",
		// 	slug: "capstone",
		// 	description:
		// 		"In my project, I aimed to understand art preferences based on a range of factors. This involved cleaning a dataset with missing values, analyzing art ratings across different styles, and exploring gender-based preferences. I utilized regression modeling to predict preferences influenced by energy levels and demographic details. Techniques like KMeans clustering and Principal Component Analysis (PCA) were also applied to deepen the analysis. The project was rounded off with a logistic regression model, providing insights into how these various factors impact art preferences.",
		// 	moreinfo: [
		// 		{ url: fileart, text: "Art Preference PDF" },
		// 		{ url: fileart, text: "Art Preference Data Set"},
		// 		{ url: fileart, text: "Art Preference Code" }
		// 	  ],
		// 	logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"],
		// 	img: art,
		// 	linkText: "View Project",
		// 	link: "/project/capstone",
		// 	images: [
		// 		art,
		// 	]
		// },
		{
			title: "Automatic Music Transcription",
			slug: "music",
			description:
				"In my project, I focused on developing a deep learning model to automatically transcribe piano music, analyzing the process through various stages. The initial step involved collecting and preprocessing the data using the Constant-Q Transform (CQT), which was then meticulously normalized to ensure consistency. To manage the complex dataset, I implemented Principal Component Analysis (PCA) for dimensionality reduction, simplifying the data before applying Deep Neural Networks (DNN) and Recurrent Neural Networks (RNNs), specifically Long Short-Term Memory (LSTM) networks. The key aspect of my analysis was applying regularization techniques, such as Dropout and early stopping, to prevent overfitting and enhance model performance. The culmination of my work was achieving 40% accuracy with the DNN model and 2% accuracy with the LSTM model, where onsets were correctly detected, demonstrating the potential of deep learning in music transcription.",
			moreinfo: [
				{ url: "https://github.com/shriyakalakata/automatic-piano-music-transcription", text: "Program Code" },
				{ url: "https://github.com/shriyakalakata/automatic-piano-music-transcription/blob/main/ADS%20Final%20Project.pdf", text: "Presentation" }
			],
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"],
			img: music1,
			linkText: "View Project",
			link: "/project/music",
			images: [
				music1,music2,music3
			]
		},
		{
			title: "Natural Language Processing - Information Retrieval",
			slug: "nlp",
			description:
				"In my project, I focused on constructing a knowledge graph from unstructured text using natural language processing (NLP) techniques, analyzing the process through various stages. The initial step involved collecting and preprocessing the data, which included stop word removal, TFIDF (Term Frequency-Inverse Document Frequency) calculation, cosine similarity measurement, lemmatization, and normalization to ensure consistency and relevance. To manage the complex dataset, I implemented Principal Component Analysis (PCA) for dimensionality reduction, simplifying the data before building the knowledge graph. The key aspect of my analysis was evaluating the model on earnings call transcripts from the Hugging Face dataset, achieving 59.40% accuracy, 18.18% recall, 71.43% precision, and an F1-Score of 28.99%, demonstrating the effectiveness of NLP techniques in information retrieval.",
			moreinfo: [
					{ url: "https://github.com/pattssun/knowledge-graph", text: "Program Code" },
					{ url: "https://github.com/pattssun/knowledge-graph/blob/main/CS469_Group21_Presentation.pdf", text: "Presentation" },
					{ url: "https://github.com/pattssun/knowledge-graph/blob/main/Group21_Project_Report.pdf", text: "Final Report" }
				  ],
			logo: ["https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png"],
			img: nlp,
			linkText: "View Project",
			link: "/project/nlp",
			images: [
				nlp
			]
		},
		{
			title: "Personal Portfolio Website",
			slug: "portfolio",
			description:
				"I developed a personal portfolio website to showcase my skills and work. The site was built using React, providing a dynamic and interactive user experience. HTML and CSS were employed to structure and style the content, ensuring a responsive and aesthetically pleasing layout. JavaScript was used to add functionality, including navigation and content management. Key features include a dynamic project gallery, mobile optimised layout, and interactive components like carousels and modals.",
			moreinfo: [
				{ url: "https://github.com/sean292002/sean292002.github.io", text: "Github Code" }
			  ],
			logo: ["https://www.cdnlogo.com/logos/r/63/react.svg","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png","https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"],
			img: site1,
			linkText: "View Project",
			link: "/project/portfolio",
			images: [
				site1,
			]
		}
	],
	contacts: [
		{
			type: "EMAIL",
			description: "got any questions or need support?",
			icon: "https://www.cdnlogo.com/logos/g/68/gmail.svg",
			url: "mailto:sean.wiryadi16@gmail.com",
		},
		{
			type: "WHATSAPP",
			description: "for quick and direct communication.",
			icon: "https://www.cdnlogo.com/logos/w/29/whatsapp-icon.svg",
			url: "https://wa.me/6597802605",
		},
		{
			type: "DISCORD",
			description: "Add me on discord Stephenicydop",
			icon: "https://www.cdnlogo.com/logos/d/43/discord.svg",
			// url: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
	],
	skills: [
		{
			title: "Programming Languages",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			stacks: [
				{
					title: "Python",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
					proficiency: "Proficient"
				},
				{
					title: "Java",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
					proficiency: "Proficient"
				},
				{
					title: "C++",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/c/c.png",
					proficiency: "Proficient"
				},
				{
					title: "R",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/r/r.png",
					proficiency: "Proficient"
				},
				{
					title: "HTML",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png",
					proficiency: "Proficient"
				},
				{
					title: "CSS",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/css/css.png",
					proficiency: "Proficient"
				},
				{
					title: "Javascript",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
					proficiency: "Proficient"
				},
				{
					title: "LaTeX",
					logo: "https://www.cdnlogo.com/logos/l/28/latex.svg",
					proficiency: "Proficient"
				}
			]
		},
		{
			"title": "Tools",
			"stacks": [
			  {
				"title": "AWS",
				"logo": "https://www.cdnlogo.com/logos/a/19/aws.svg",
				"proficiency": "Proficient"
			  },
			  {
				"title": "GCP",
				"logo": "https://www.cdnlogo.com/logos/g/75/google-cloud.svg",
				"proficiency": "Proficient"
			  },
			  {
				"title": "NodeJS",
				"logo": "https://www.cdnlogo.com/logos/n/94/nodejs-icon.svg",
				"proficiency": "Proficient"
			  },
			  {
				"title": "Flask",
				"logo": "https://www.cdnlogo.com/logos/f/50/flask.svg",
				"proficiency": "Proficient"
			  },
			  {
				"title": "Figma",
				"logo": "https://www.cdnlogo.com/logos/f/54/figma.svg",
				"proficiency": "Proficient"
			  },
			  {
				"title": "Canva",
				"logo": "https://www.cdnlogo.com/logos/c/41/canva.svg",
				"proficiency": "Proficient"
			  },
			  {
				"title": "Microsoft Office",
				"logo": "https://www.cdnlogo.com/logos/m/48/microsoft-office-2013-and-wordmark.svg",
				"proficiency": "Proficient"
			  }
			]
		  },		  
		{
			title: "Frameworks/Libraries",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			stacks: [
				{
					title: "React",
					logo: "https://www.cdnlogo.com/logos/r/63/react.svg",
					proficiency: "Proficient"
				},
				{
					title: "NumPy",
					logo: "https://www.cdnlogo.com/logos/n/81/numpy.svg",
					proficiency: "Proficient"
				},
				{
					title: "Pandas",
					logo: "https://www.cdnlogo.com/logos/p/65/pandas.svg",
					proficiency: "Proficient"
				},
				{
					title: "Matplotlib",
					logo: "https://www.cdnlogo.com/logos/t/73/tableau-software.svg",
					proficiency: "Proficient"
				},
				{
					title: "Tableau",
					logo: "https://www.cdnlogo.com/logos/t/73/tableau-software.svg",
					proficiency: "Proficient"
				},
				{
					title: "PyTorch",
					logo: "https://www.cdnlogo.com/logos/p/36/pytorch.svg",
					proficiency: "Proficient"
				},
				{
					title: "TensorFlow",
					logo: "https://www.cdnlogo.com/logos/t/22/tensorflow.svg",
					proficiency: "Proficient"
				},
				{
					title: "Scikitlearn",
					logo: "https://www.cdnlogo.com/logos/t/73/tableau-software.svg",
					proficiency: "Proficient"
				},
				{
					title: "Beautiful Soup",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
					proficiency: "Proficient"
				},
				{
					title: "Requests",
					logo: "https://www.cdnlogo.com/logos/t/73/tableau-software.svg",
					proficiency: "Proficient"
				},
				{
					title: "Threading",
					logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
					proficiency: "Proficient"
				},
			]
		},
		{
			title: "Databases",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			stacks: [
				{
					title: "MySQL",
					logo: "https://www.cdnlogo.com/logos/m/78/mysql.svg",
					proficiency: "Proficient"
				},
				{
					title: "MongoDB",
					logo: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg",
					proficiency: "Proficient"
				}
			]
		}
	],
	socials: [
		{
		  name: "GitHub",
		  url: "https://github.com/sean292002",
		  icon: RiGithubFill,
		},
		{
		  name: "Twitter",
		  url: "https://twitter.com/repdoge",
		  icon: RiTwitterXFill,
		},
		{
		  name: "LinkedIn",
		  url: "https://www.linkedin.com/in/sean-wiryadi-4294b9155/",
		  icon: RiLinkedinFill,
		},
		{
		  name: "Medium",
		  url: "https://medium.com/@seanwiryadi16",
		  icon: PiMediumLogoFill,
		},
	]
};

export default INFO;
