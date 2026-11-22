import { Box, Center, Flex, Text } from '@chakra-ui/react'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import { BlogArticleList } from '@/presentation/feature/blog/BlogArticleList'
import type { BlogUiState } from '@/presentation/feature/blog/BlogUiState'

interface Props {
  uiState: BlogUiState
}

/** All of the UI of the blog page. */
export function BlogPageContent({ uiState }: Props) {
  return (
    <RootScaffold selectedNavButton={uiState.selectedNavButton}>
      <Flex direction={'column'}>
        <Center>
          <Text textStyle={'mainTitle'} textAlign="center">
            My Blog
          </Text>
        </Center>
        <Box h="80px" />
        <BlogArticleList articles={uiState.articles} />
      </Flex>
    </RootScaffold>
  )
}
