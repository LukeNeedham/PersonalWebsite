import { BlogArticle } from '@/domain/model/BlogArticle'
import { LocalDate } from '@/domain/model/LocalDate'
import blogArticles from '@/generated/blog-articles.json'

/** "2026-11-07", as `scripts/build-blog.ts` writes it from the front matter of the markdown file. */
function parseDate(iso: string): LocalDate {
  const [year, month, day] = iso.split('-').map(Number)
  return new LocalDate(day, month, year)
}

/** Newest first; articles published on the same day are ordered by id, which is unique. */
function compareNewestFirst(a: BlogArticle, b: BlogArticle): number {
  const dateA = a.publishDate
  const dateB = b.publishDate
  return (
    dateB.year - dateA.year ||
    dateB.month - dateA.month ||
    dateB.day - dateA.day ||
    a.id.localeCompare(b.id)
  )
}

/** Every markdown file in `articles` of the content repo is an article: there is no list to keep in step with them. */
const articles: BlogArticle[] = blogArticles
  .map((it) => ({
    id: it.id,
    title: it.title,
    image: it.image,
    publishDate: parseDate(it.date),
  }))
  .sort(compareNewestFirst)

export const BlogArticleProvider = {
  articles,
  getArticle: (id: string): BlogArticle | undefined => articles.find((it) => it.id === id),
}
