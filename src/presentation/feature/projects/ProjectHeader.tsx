import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack } from '@chakra-ui/react'
import { Clickable } from 'presentation/common/Clickable'

interface Props {
    imageUrl: string
    imageAlt: string
    onImageClick: () => void
    title: string
    description: JSX.Element
}

export function ProjectHeader(
    props: Props
) {
    return (
        <Flex direction={'row'}>
            <AspectRatio ratio={1} flex={4} maxW='150px' >
                <Clickable onClick={props.onImageClick}>
                    <Flex direction={'column'} h='100%' w='100%' alignItems='start'>
                        <Image
                            src={props.imageUrl}
                            alt={props.imageAlt}
                            w={'100%'}
                            borderRadius='full'
                        />
                        <Box flex={1} />
                    </Flex>
                </Clickable>
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