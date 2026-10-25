import fs from "fs/promises"
import path from "path"
import { BlogArticlePage } from "presentation/feature/blog/article/BlogArticlePage"
import { BlogArticleProvider } from "domain/provider/BlogArticleProvider"
import { renderMarkdown } from "domain/provider/MarkdownRenderer"

interface Props {
    params: { id: string }
}

// Only the known articles exist; everything is rendered to static HTML at build time.
export const dynamicParams = false

export function generateStaticParams() {
    return BlogArticleProvider.articles.map(it => ({ id: it.id }))
}

async function readContentHtml(contentFile: string): Promise<string> {
    const markdown = await fs.readFile(path.join(process.cwd(), "public", contentFile), "utf-8")
    return renderMarkdown(markdown)
}

export default async function Page(props: Props) {
    const article = BlogArticleProvider.getArticle(props.params.id)
    const contentHtml = article === undefined ? undefined : await readContentHtml(article.contentFile)
    return <BlogArticlePage articleId={props.params.id} contentHtml={contentHtml} />
}
