import { BlogArticleProvider } from '@/domain/provider/BlogArticleProvider'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { UrlProvider } from '@/domain/provider/UrlProvider'
import { BlogPageContent } from '@/presentation/feature/blog/BlogPageContent'
import type { BlogUiState } from '@/presentation/feature/blog/BlogUiState'

/** Connects the blog page to the app: it reads the articles from the provider and hands them down. No state, so no view model. */
export function BlogPage() {
  const uiState: BlogUiState = {
    selectedNavButton: NavBarProvider.blog,
    articles: BlogArticleProvider.articles.map((it) => ({
      id: it.id,
      title: it.title,
      image: it.image,
      date: it.publishDate.format(),
      href: UrlProvider.blogArticle(it.id),
    })),
  }
  return <BlogPageContent uiState={uiState} />
}
