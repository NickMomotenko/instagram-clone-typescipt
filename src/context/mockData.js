import { v4 as uuid } from "uuid";

import voiceExample from "../assets/audio/brian.mp3";

export const posts = [
	{
		id: 1,
		postType: "text",
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		photo: [
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
		],
		comments: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
				text: "Looking like a good comment",
			},
			{
				id: uuid(),
				user: {
					id: 1,
					fullname: "Neelesh Chaudhary",
					city: "New York",
					avatar:
						"https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
				},
				text: "хуета",
			},
			{
				id: uuid(),
				user: {
					id: 1,
					fullname: "Neelesh Chaudhary",
					city: "New York",
					avatar:
						"https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
				},
				text: "хуета 2",
			},
		],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
			{
				id: uuid(),
				user: {
					id: 3,
					fullname: "Lexa Stenli",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
	{
		id: 2,
		postType: "text",
		user: {
			id: 3,
			fullname: "Lexa Stenli",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		photo: ["https://deadbees.net/wp-content/uploads/2016/07/200716_41.jpg"],
		comments: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
				text: "Looking like a good comment",
			},
		],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
	{
		id: 3,
		postType: "video",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		comments: [],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
	{
		id: 4,
		postType: "text",
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		photo: [
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
		],
		comments: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
				text: "Looking like a good comment",
			},
		],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
	{
		id: 5,
		postType: "video",
		videoUrl:
			"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		comments: [],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
	{
		id: 6,
		postType: "text",
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		photo: [
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
		],
		comments: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
				text: "Looking like a good comment",
			},
		],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
	{
		id: 7,
		postType: "text",
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
		date: "Wed, 26 January 2021",
		text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
		photo: [
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			"https://kor.ill.in.ua/m/610x385/2445521.jpg",
		],
		comments: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
				text: "Looking like a good comment",
			},
		],
		liked: [
			{
				id: uuid(),
				user: {
					id: 2,
					fullname: "Vidovik Rouse",
					city: "Banī Khaddāsh",
					avatar:
						"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				},
			},
		],
	},
];

export const authUser = {
	user: {
		id: 1,
		avatar:
			"https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
		nickname: "nkchaudhary01",
		fullname: "Neelesh Chaudhary",
		job: "Wildlife Photographer",
		city: "New York",
		description:
			"Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end.",
		links: [
			{
				id: uuid(),
				title: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
				link: "https://www.linkedin.com/in/nick-momotenko-b3963b189/",
			},
		],
	},
	posts: [
		{
			id: uuid(),
			postType: "text",
			date: "Wed, 26 January 2021",
			text: "Scarcely on striking packages by so property in delicate. Up or well must less rent read walk so be. Easy sold at do hour sing spot. Any meant has cease too the decay. Since party burst am it match. By or blushes between besides offices noisier as. Sending do brought winding compass in. Paid day till shed only fact age its end. ",
			photo: [
				"https://kor.ill.in.ua/m/610x385/2445521.jpg",
				"https://kor.ill.in.ua/m/610x385/2445521.jpg",
				"https://kor.ill.in.ua/m/610x385/2445521.jpg",
			],
			comments: [
				{
					id: uuid(),
					user: {
						fullname: "Vidovik Rouse",
						city: "Banī Khaddāsh",
						avatar:
							"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
					},
					text: "Looking like a good comment",
				},
			],
			liked: [
				// {
				//   id: uuid(),
				//   user: {
				//     fullname: "Vidovik Rouse",
				//     city: "Banī Khaddāsh",
				//     avatar:
				//       "https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
				//   },
				// },
			],
		},
	],
	stories: [
		{
			image: "https://robohash.org/nisiomnisquo.png?size=50x50&set=set1",
			id: uuid(),
			title: "Brother",
		},
		{
			image: "https://robohash.org/enimcumadipisci.png?size=50x50&set=set1",
			id: uuid(),
			title: "Robo",
		},
		{
			image:
				"https://robohash.org/placeatcumquefacilis.png?size=50x50&set=set1",
			id: uuid(),
			title: "RoboShit",
		},
		{
			image:
				"https://robohash.org/officiatemporadolorem.png?size=50x50&set=set1",
			id: uuid(),
			title: "Paris",
		},
	],
	saved: [],
	liked: [],
};

export const allDbUsers = [
	{
		user: {
			id: 1,
			fullname: "Neelesh Chaudhary",
			city: "New York",
			avatar:
				"https://media-exp1.licdn.com/dms/image/C4E03AQGi0swkMYXGPQ/profile-displayphoto-shrink_800_800/0/1613669311997?e=1625097600&v=beta&t=3sv_UEFRa75vHsd3CGPPnSpHdshFK1R4XqNcv_Bo9uA",
		},
	},
	{
		user: {
			id: 2,
			fullname: "Vidovik Rouse",
			city: "Banī Khaddāsh",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
	},
	{
		user: {
			id: 3,
			fullname: "Lexa Stenli",
			city: "Banī Khaddāsh",
			country: "Tunisia",
			avatar:
				"https://robohash.org/quaspraesentiummolestiae.png?size=50x50&set=set1",
		},
	},
];

export const messagesDb = [
	{
		id: uuid(),
		user: {
			id: uuid(),
			fullname: "Annet Black",
			avatar: "",
		},
		data: [
			{
				id: uuid(),
				text: "Test text 1",
				date: "24.05.2021",
				time: "19:17",
			},
			{
				id: uuid(),
				isMe: true,
				text: "Test text 2 Ffaf fafar fff faqfafa",
				date: "24.05.2021",
				time: "19:18",
			},
			{
				id: uuid(),
				isMe: true,
				date: "24.05.2021",
				time: "19:18",
				type: "voice",
				url: voiceExample,
			},
		],
	},
	{
		id: uuid(),
		user: {
			id: uuid(),
			fullname: "Annet Black2",
			avatar: "",
		},
		data: [
			{
				id: uuid(),
				text: "Test text 1",
				date: "24.05.2021",
				time: "19:17",
			},
			{
				id: uuid(),
				isMe: true,
				text: "Test text 2",
				date: "24.05.2021",
				time: "19:18",
			},
		],
	},
	{
		id: uuid(),
		user: {
			id: uuid(),
			fullname: "Annet Black3",
			avatar: "",
		},
		data: [
			{
				id: uuid(),
				text: "Test text 1",
				date: "24.05.2021",
				time: "19:17",
			},
			{
				id: uuid(),
				isMe: true,
				text: "Test text 2",
				date: "24.05.2021",
				time: "19:18",
			},
		],
	},
	{
		id: uuid(),
		user: {
			id: uuid(),
			fullname: "Annet Black5",
			avatar: "",
		},
		data: [
			{
				id: uuid(),
				text: "Test text 1",
				date: "24.05.2021",
				time: "19:17",
			},
			{
				id: uuid(),
				isMe: true,
				text: "Test text 2",
				date: "24.05.2021",
				time: "19:18",
			},
		],
	},
	{
		id: uuid(),
		user: {
			id: uuid(),
			fullname: "Annet Black5",
			avatar: "",
		},
		data: [
			{
				id: uuid(),
				text: "Test text 1",
				date: "24.05.2021",
				time: "19:17",
			},
			{
				id: uuid(),
				isMe: true,
				text: "Test text 2",
				date: "24.05.2021",
				time: "19:18",
			},
		],
	},
];
