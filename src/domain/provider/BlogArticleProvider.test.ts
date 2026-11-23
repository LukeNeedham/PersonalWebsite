import { expect, test } from 'vitest'
import { BlogArticleProvider } from '@/domain/provider/BlogArticleProvider'

test('the newest article is first', () => {
  const dates = BlogArticleProvider.articles.map(
    (it) => it.publishDate.year * 10000 + it.publishDate.month * 100 + it.publishDate.day,
  )
  expect(dates).toEqual([...dates].sort((a, b) => b - a))
})

test('every id is unique, because it is the markdown file name and the address', () => {
  const ids = BlogArticleProvider.articles.map((it) => it.id)
  expect(new Set(ids).size).toBe(ids.length)
})

test('an article is found by its id, and an unknown id has none', () => {
  expect(BlogArticleProvider.getArticle('apphub')?.title).toBe('Vibe-coding an App Store')
  expect(BlogArticleProvider.getArticle('nothing-here')).toBeUndefined()
})

test('every markdown file is an article', async () => {
  const fs = await import('node:fs')
  const files = fs.readdirSync(`${process.env.BLOG_CONTENT_DIR || 'content'}/articles`).filter((it) => it.endsWith('.md'))
  const ids = BlogArticleProvider.articles.map((it) => it.id)
  expect([...ids].sort()).toEqual(files.map((it) => it.replace(/\.md$/, '')).sort())
})
