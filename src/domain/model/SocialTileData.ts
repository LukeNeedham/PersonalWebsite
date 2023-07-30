export interface SocialTileData {
	backgroundColor: string
	foregroundColor: string
	icon: ImageData
	description: string
	url: string
	urlScheme: string
}

export function getAbsoluteSocialUrl(data: SocialTileData) {
	return data.urlScheme + data.url
}