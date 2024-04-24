import { AboutTileData } from 'domain/model/AboutTileData'

const tileProblemSolving: AboutTileData = {
	image: {
		src: '/asset/image/photo/bouldering.png',
		alt: 'Me stretching across holds while solving a problem on a bouldering wall',
	},
	title: 'I solve problems',
	description: 'I have a passion for problem-solving, which is why I love software engineering. I have professional development experience with Android, web front-end, and games in Unity.',
}

const tileAndroid: AboutTileData = {
	image: {
		src: '/asset/image/photo/programming.png',
		alt: 'Me as a floppy-haired student sitting in front of my laptop during a Hackathon',
	},
	title: 'I love Android',
	description: 'I’ve been developing for Android ever since I was 17. I’ve made apps, libraries, launchers, widgets, system keyboards, and much more.',
}

const tileUni: AboutTileData = {
	image: {
		src: '/asset/image/photo/graduating.png',
		alt: 'Me shaking hands with an important-looking official in ceremonial dress during my graduation',
	},
	title: 'I studied Computer Science',
	description: 'I graduated from Durham University, UK, with a First Class BSc Hons in Computer Science.',
}

const tileNetherlands: AboutTileData = {
	image: {
		src: '/asset/image/photo/biking.png',
		alt: 'Me as a silhouette cycling my typically Dutch bike atop a typically Dutch dike, while the sun sets in the background',
	},
	title: 'I live in the Netherlands',
	description: 'I moved after uni and quickly fell in love with the bikes and canals. I speak native English and conversational Dutch.',
}

const tileHobbies: AboutTileData = {
	image: {
		src: '/asset/image/photo/hiking.png',
		alt: 'Me posing in front of a forest, valley, and mountain range while hiking in Switzerland on a beautiful sunny day',
	},
	title: 'I also have hobbies',
	description: 'I like to dabble in design - including this very website. I also love language, music, bouldering, cycling, and hiking.',
}

const tiles: Array<AboutTileData> = [
	tileProblemSolving,
	tileAndroid,
	tileUni,
	tileNetherlands,
	tileHobbies,
]

export const AboutTileDataProvider = {
	tiles: tiles
}