import "highlight.js/styles/androidstudio.css"
import {BlogArticleProvider} from "domain/provider/BlogArticleProvider"
import {NavBarProvider} from "domain/provider/NavBarProvider"
import {RootScaffold} from "presentation/common/RootScaffold"
import styles from "./BlogArticle.module.css"

interface Props {
    articleId: string
    /** Pre-rendered HTML for the article body */
    contentHtml?: string
}

/**
 * Server component: the markdown is rendered to plain HTML at build time,
 * so no markdown or syntax highlighting code is shipped to the browser.
 */
export function BlogArticlePage(props: Props) {
    const article = BlogArticleProvider.getArticle(props.articleId)

    const title = article?.title ?? "Article not found"
    const date = article?.publishDate?.format() ?? ""

    return (
        <RootScaffold selectedNavButton={NavBarProvider.blog}>
            <div className={styles.header}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.date}>{date}</p>
            </div>
            {props.contentHtml === undefined ? null : (
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{__html: props.contentHtml}}
                />
            )}
        </RootScaffold>
    )
}
