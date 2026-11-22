import 'highlight.js/styles/androidstudio.css'
import '@/generated/blog-article.css'
import { BlogArticleProvider } from '@/domain/provider/BlogArticleProvider'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { BlogArticlePageContent } from '@/presentation/feature/blog/article/BlogArticlePageContent'
import type { BlogArticleUiState } from '@/presentation/feature/blog/article/BlogArticleUiState'

interface Props {
  articleId: string
  /** Pre-rendered HTML for the article body */
  contentHtml?: string
}

/**
 * Server component, statically generated: the article HTML and CSS are produced
 * by `scripts/build-blog.ts`, so no markdown or highlighting code is in the app.
 */
export function BlogArticlePage(props: Props) {
  const article = BlogArticleProvider.getArticle(props.articleId)
  const uiState: BlogArticleUiState = {
    selectedNavButton: NavBarProvider.blog,
    title: article?.title ?? 'Article not found',
    date: article?.publishDate?.format() ?? '',
    contentHtml: props.contentHtml,
  }
  return <BlogArticlePageContent uiState={uiState} />
}
