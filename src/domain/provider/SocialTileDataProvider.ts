import { SocialTileData } from 'domain/model/SocialTileData'

const socialGithub: SocialTileData = {
	backgroundColor: '#24292F',
	foregroundColor: '#FFFFFF',
	icon: {
		src: '/asset/icon/github.svg',
		alt: 'Github'
	},
	description: 'I love Open Source. Check out my Github to see my projects - including this very website.',
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
	description: 'Without StackOverflow I wouldn’t be here. I enjoy answering questions to give back to the community.',
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
	description: 'To learn more about my career so far, check my LinkedIn. Feel free to connect with me if you’d like to get in touch.',
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
	description: 'When I’m not writing code, I’m writing Medium articles. I like to write about Android quirks.',
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