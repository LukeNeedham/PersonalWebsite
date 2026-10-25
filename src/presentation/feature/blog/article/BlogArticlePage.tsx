import "highlight.js/styles/androidstudio.css"
import {BlogArticleProvider} from "domain/provider/BlogArticleProvider"
import {NavBarProvider} from "domain/provider/NavBarProvider"
import {RootScaffold} from "presentation/common/RootScaffold"
import "generated/blog-article.css"

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

    const title = article?.title ?? "Article not found"
    const date = article?.publishDate?.format() ?? ""

    return (
        <RootScaffold selectedNavButton={NavBarProvider.blog}>
            <div className="blog-article-header">
                <h1 className="blog-article-title">{title}</h1>
                <p className="blog-article-date">{date}</p>
            </div>
            {props.contentHtml === undefined ? null : (
                <div
                    className="blog-article-content"
                    dangerouslySetInnerHTML={{__html: props.contentHtml}}
                />
            )}
        </RootScaffold>
    )
}
