import { RootScaffold } from '@/presentation/common/RootScaffold'
import type { BlogArticleUiState } from '@/presentation/feature/blog/article/BlogArticleUiState'

interface Props {
  uiState: BlogArticleUiState
}

/** All of the UI of an article. The article is plain HTML, styled by the CSS that `scripts/build-blog.ts` generates. */
export function BlogArticlePageContent({ uiState }: Props) {
  return (
    <RootScaffold selectedNavButton={uiState.selectedNavButton}>
      <div className="blog-article-header">
        <h1 className="blog-article-title">{uiState.title}</h1>
        <p className="blog-article-date">{uiState.date}</p>
      </div>
      {uiState.contentHtml === undefined ? null : (
        <div
          className="blog-article-content"
          dangerouslySetInnerHTML={{ __html: uiState.contentHtml }}
        />
      )}
    </RootScaffold>
  )
}
