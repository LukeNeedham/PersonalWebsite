class UrlProviderImpl {
	readonly about = '/about'
	readonly projects = '/projects'
	readonly blog = '/blog'
	readonly socials = '/socials'

	blogArticle(id: string): string {
		return `${this.blog}/${id}`
	}
}

export const UrlProvider = new UrlProviderImpl()