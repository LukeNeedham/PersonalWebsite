import { Box, Flex, Text, Image, AspectRatio } from '@chakra-ui/react'
import { ExternalLink } from '@/presentation/common/ExternalLink'
import NextLink from 'next/link'
import type { ReactNode } from 'react'

interface Props {
  imageUrl: string
  imageAlt: string
  href: string
  title: string
  description: ReactNode
}

export function ProjectHeader(props: Props) {
  const isExternal = props.href.startsWith('http')
  const imageContent = (
    <Flex direction={'column'} h="100%" w="100%" alignItems="start">
      <Image src={props.imageUrl} alt={props.imageAlt} w={'100%'} borderRadius="full" />
      <Box flex={1} />
    </Flex>
  )
  const imageLink = isExternal ? (
    <ExternalLink href={props.href} display="inline-flex">
      {imageContent}
    </ExternalLink>
  ) : (
    <Box display="inline-flex" cursor="pointer">
      <NextLink href={props.href} style={{ display: 'inherit' }}>
        {imageContent}
      </NextLink>
    </Box>
  )
  return (
    <Flex direction={'row'}>
      <AspectRatio ratio={1} flex={4} maxW="150px">
        {imageLink}
      </AspectRatio>
      <Box flex={1} maxW="50px" />
      <Flex direction={'column'} flex={8}>
        <Text textStyle="subTitle">{props.title}</Text>
        <Box h="10px" />
        {props.description}
      </Flex>
    </Flex>
  )
}
