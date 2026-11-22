const blog = '/blog'

/** Every route of the site is here, so that a path is never written out in a component. */
export const UrlProvider = {
  about: '/about',
  projects: '/projects',
  blog,
  socials: '/socials',
  blogArticle: (id: string) => `${blog}/${id}`,
}
