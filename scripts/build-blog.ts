/**
 * BUILD TIME ONLY. Run by `yarn generate` (also as the pre-step of `dev`, `build`, `typecheck` and `test`).
 *
 * The blog is built by the shared `next-js-blog` package: it downloads the articles from the content repo, renders
 * them to HTML and writes them, their list and the article CSS to `src/generated`. The app (`src`) only ever imports
 * these outputs; it contains no markdown, highlighting or style-generation code. What is the site's own is here:
 * where its content is, what the front matter of an article holds, and the styling of an article.
 */
import { buildBlog, chakraToCss } from 'next-js-blog'
import { system } from '@/presentation/theme/system'
import { articleStyles } from './blog/articleStyles'

buildBlog({
  contentRepo: 'LukeNeedham/personalwebsite-blogcontent',
  fields: { title: 'text', image: 'image', date: 'date' },
  articleCss: chakraToCss(system, articleStyles),
}).catch((error) => {
  console.error(error)
  process.exit(1)
})
