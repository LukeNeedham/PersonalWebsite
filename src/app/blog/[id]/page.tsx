import { BlogArticlePage } from "presentation/feature/blog/article/BlogArticlePage"
import { BlogArticleProvider } from "domain/provider/BlogArticleProvider"
import blogHtml from "generated/blog-html.json"

interface Props {
    params: { id: string }
}

// Only the known articles exist; each is a static page (see `scripts/build-blog.ts`).
export const dynamicParams = false

export function generateStaticParams() {
    return BlogArticleProvider.articles.map(it => ({ id: it.id }))
}

export default function Page(props: Props) {
    const article = BlogArticleProvider.getArticle(props.params.id)
    const contentHtml = (blogHtml as Record<string, string>)[props.params.id]
    if (article !== undefined && contentHtml === undefined) {
        throw new Error(`No generated HTML for article '${article.id}': is content/blog/${article.id}.md missing?`)
    }
    return <BlogArticlePage articleId={props.params.id} contentHtml={contentHtml} />
}
