import {unified} from "unified"
import remarkParse from "remark-parse"
import remarkRehype from "remark-rehype"
import rehypeRaw from "rehype-raw"
import rehypeHighlight from "rehype-highlight"
import rehypeStringify from "rehype-stringify"

const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeHighlight)
    .use(rehypeStringify)

/** Renders trusted (own, in-repo) markdown to an HTML string. */
export async function renderMarkdown(markdown: string): Promise<string> {
    return String(await processor.process(markdown))
}
