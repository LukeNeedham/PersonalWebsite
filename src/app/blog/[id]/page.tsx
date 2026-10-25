import fs from "fs/promises"
import path from "path"
import { BlogArticlePage } from "presentation/feature/blog/article/BlogArticlePage"
import { BlogArticleProvider } from "domain/provider/BlogArticleProvider"

interface Props {
    params: { id: string }
}

// Only the known articles exist; everything is rendered to static HTML at build time.
export const dynamicParams = false

export function generateStaticParams() {
    return BlogArticleProvider.articles.map(it => ({ id: it.id }))
}

async function readContent(contentFile: string): Promise<string> {
    return fs.readFile(path.join(process.cwd(), "public", contentFile), "utf-8")
}

export default async function Page(props: Props) {
    const article = BlogArticleProvider.getArticle(props.params.id)
    const content = article === undefined ? undefined : await readContent(article.contentFile)
    return <BlogArticlePage articleId={props.params.id} content={content} />
}
