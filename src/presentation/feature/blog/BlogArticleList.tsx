import { VStack } from '@chakra-ui/react'
import { BlogArticleListItem } from '@/presentation/feature/blog/BlogArticleListItem'
import type { BlogArticleItem } from '@/presentation/feature/blog/BlogUiState'

interface Props {
  articles: BlogArticleItem[]
}

export function BlogArticleList(props: Props) {
  return (
    <VStack gap={'20px'} w={'full'}>
      {props.articles.map((it) => (
        <BlogArticleListItem key={it.id} article={it} />
      ))}
    </VStack>
  )
}
