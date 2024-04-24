'use client'

import { BlogArticlePage } from "presentation/feature/blog/article/BlogArticlePage"

interface Props {
    params: { id: string }
}

export default function Page(props: Props) {
    return <BlogArticlePage articleId={props.params.id} />
}