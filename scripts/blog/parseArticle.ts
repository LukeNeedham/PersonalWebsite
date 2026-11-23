export interface ArticleMeta {
  title: string
  /** The thumbnail shown in the list: a path under `public`, e.g. /asset/image/blog/junie.png */
  image: string
  /** ISO date: 2026-11-07 */
  date: string
}

export interface ParsedArticle {
  meta: ArticleMeta
  /** The markdown after the front matter */
  body: string
}

const frontMatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/

function unquote(value: string): string {
  const quoted = /^(["'])(.*)\1$/.exec(value)
  return quoted === null ? value : quoted[2]
}

/**
 * Splits an article into its front matter (`key: value` lines between two `---` lines) and its markdown.
 * Fails loudly, naming the file, if the title, image or date is missing or the date is not `YYYY-MM-DD`.
 */
export function parseArticle(id: string, source: string): ParsedArticle {
  const match = frontMatter.exec(source)
  if (match === null) {
    throw new Error(`content/blog/${id}.md has no front matter (title, image and date).`)
  }
  const fields: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const colon = line.indexOf(':')
    if (colon > 0) {
      fields[line.slice(0, colon).trim()] = unquote(line.slice(colon + 1).trim())
    }
  }
  for (const key of ['title', 'image', 'date']) {
    if (!fields[key]) {
      throw new Error(`content/blog/${id}.md has no '${key}' in its front matter.`)
    }
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fields.date)) {
    throw new Error(`content/blog/${id}.md: the date must be YYYY-MM-DD, not '${fields.date}'.`)
  }
  return {
    meta: { title: fields.title, image: fields.image, date: fields.date },
    body: source.slice(match[0].length),
  }
}
