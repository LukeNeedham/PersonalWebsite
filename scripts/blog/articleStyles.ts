/**
 * The styling of a blog article, written as Chakra style props.
 *
 * Articles are plain HTML (no Chakra components), so these are compiled to CSS
 * at build time by `chakraToCss`, using the real theme. Text styles, breakpoints
 * and tokens therefore stay in sync with the rest of the app automatically.
 */
export const articleStyles: Record<string, Record<string, unknown>> = {
    '.blog-article-header': {
        textAlign: 'center',
        marginBottom: '80px',
    },
    '.blog-article-title': {
        textStyle: 'mainTitle',
        marginBottom: '10px',
    },
    '.blog-article-date': {
        textStyle: 'body',
    },
    // Flex column so vertical margins add up rather than collapse, as in the rest of the app
    '.blog-article-content': {
        display: 'flex',
        flexDirection: 'column',
        textStyle: 'body',
    },
    '.blog-article-content h1, .blog-article-content h2': {
        textStyle: 'subTitle',
        marginTop: '60px',
        marginBottom: '30px',
    },
    '.blog-article-content p': {
        textStyle: 'body',
        marginTop: '10px',
        marginBottom: '10px',
    },
    '.blog-article-content ul': {
        textStyle: 'body',
        marginInlineStart: '1em',
        marginBottom: '30px',
    },
    '.blog-article-content li': {
        textStyle: 'body',
        marginTop: '10px',
        marginBottom: '5px',
    },
    '.blog-article-content a': {
        textDecoration: 'underline',
    },
    '.blog-article-content :not(pre) > code': {
        background: '#eee',
    },
    '.blog-article-content pre': {
        borderRadius: '5px',
        overflow: 'auto',
        marginTop: '10px',
        marginBottom: '25px',
    },
    // Colours and background come from the highlight.js theme.
    // The theme sets padding via `pre code.hljs`, so match its specificity or better.
    '.blog-article-content pre code.hljs': {
        fontFamily: 'mono',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px',
        padding: '8px',
    },
}
