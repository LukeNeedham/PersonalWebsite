import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack } from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props {
    imageUrl: string
    imageAlt: string
    href: string
    title: string
    description: JSX.Element
}

export function ProjectHeader(
    props: Props
) {
    const isExternal = props.href.startsWith('http')
    const imageContent = (
        <Flex direction={'column'} h='100%' w='100%' alignItems='start'>
            <Image
                src={props.imageUrl}
                alt={props.imageAlt}
                w={'100%'}
                borderRadius='full'
            />
            <Box flex={1} />
        </Flex>
    )
    const imageLink = isExternal ? (
        <Box
            as='a'
            href={props.href}
            target='_blank'
            rel='noopener noreferrer'
            cursor='pointer'
            display='inline-flex'
        >
            {imageContent}
        </Box>
    ) : (
        <Box display='inline-flex' cursor='pointer'>
            <NextLink href={props.href} style={{display: 'inherit'}}>
                {imageContent}
            </NextLink>
        </Box>
    )
    return (
        <Flex direction={'row'}>
            <AspectRatio ratio={1} flex={4} maxW='150px' >
                {imageLink}
            </AspectRatio>
            <Box flex={1} maxW='50px' />
            <Flex direction={'column'} flex={8}>
                <Text textStyle='subTitle'>{props.title}</Text>
                <Box h='10px' />
                {props.description}
            </Flex>
        </Flex>
    )
}
