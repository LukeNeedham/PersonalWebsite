import { SocialTileData } from 'domain/model/SocialTileData'

const socialGithub: SocialTileData = {
	backgroundColor: '#24292F',
	foregroundColor: '#FFFFFF',
	icon: {
		src: '/asset/icon/github.svg',
		alt: 'Github'
	},
	description: 'I love Open Source software - check out my Github to see my personal projects and other contributions.',
	url: 'github.com/LukeNeedham',
	urlScheme: 'https://',
}

const socialStackoverflow: SocialTileData = {
	backgroundColor: '#F48225',
	foregroundColor: '#FFFFFF',
	icon: {
		src: '/asset/icon/stackoverflow.svg',
		alt: 'StackOverflow'
	},
	description: 'Like every developer, I use StackOverflow. I also like to give back to the community by answering questions.',
	url: 'stackoverflow.com/users/6007104/luke-needham',
	urlScheme: 'https://',
}

const socialLinkedIn: SocialTileData = {
	backgroundColor: '#0077B5',
	foregroundColor: '#FFFFFF',
	icon: {
		src: '/asset/icon/linkedin.png',
		alt: 'LinkedIn'
	},
	description: 'I use LinkedIn to stay in contact with colleagues and share my projects. If you wish to get in touch, feel free to connect with me.',
	url: 'linkedin.com/in/luke-needham/',
	urlScheme: 'https://',
}

const socialMedium: SocialTileData = {
	backgroundColor: '#000000',
	foregroundColor: '#FFFFFF',
	icon: {
		src: '/asset/icon/medium.png',
		alt: 'Medium'
	},
	description: 'When I’m not writing code, I’m writing articles on Medium. I usually like to write about oddities in the Android framework.',
	url: 'lukeneedham.medium.com',
	urlScheme: 'https://',
}

const tiles = [
	socialGithub,
	socialStackoverflow,
	socialLinkedIn,
	socialMedium,
]

export const SocialTileDataProvider = {
	tiles: tiles
}