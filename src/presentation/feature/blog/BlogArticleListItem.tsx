import { Box, Text, Flex, Image, Center } from '@chakra-ui/react'
import NextLink from 'next/link'
import type { BlogArticleItem } from '@/presentation/feature/blog/BlogUiState'

interface Props {
  article: BlogArticleItem
}

export function BlogArticleListItem(props: Props) {
  const imageSize = '180px'

  return (
    <Box display="inline-flex" w={'full'}>
      <NextLink
        href={props.article.href}
        style={{ display: 'inherit', width: '100%', cursor: 'pointer', textDecoration: 'none' }}
      >
        <Flex
          direction={'row'}
          background={'#ddd'}
          padding={'15px'}
          borderRadius={'10px'}
          w={'full'}
        >
          <Center borderRadius={'10px'} background={'#000'} overflow={'hidden'}>
            <Image src={props.article.image} alt={''} h={imageSize} w={imageSize} />
          </Center>
          <Flex
            direction={'column'}
            paddingStart={{ base: '15px', sm: '30px' }}
            paddingEnd={'10px'}
            flex={2}
            minW={'0px'}
          >
            <Text textStyle={'subTitle'}>{props.article.title}</Text>
            <Text textStyle={'body'} paddingTop={'20px'}>
              {props.article.date}
            </Text>
          </Flex>
        </Flex>
      </NextLink>
    </Box>
  )
}
