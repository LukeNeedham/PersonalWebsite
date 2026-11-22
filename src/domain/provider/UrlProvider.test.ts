import { expect, test } from 'vitest'
import { UrlProvider } from '@/domain/provider/UrlProvider'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'

test('an article is under the blog', () => {
  expect(UrlProvider.blogArticle('apphub')).toBe('/blog/apphub')
})

test('every button of the navigation goes to a route of the site', () => {
  const routes = [UrlProvider.about, UrlProvider.projects, UrlProvider.blog, UrlProvider.socials]
  expect(NavBarProvider.datas.map((it) => it.url)).toEqual(routes)
})
