import { ImageData } from 'domain/model/ImageData'
import { AboutTileData } from 'domain/model/AboutTileData'
import { Flex, Text, Image, Box } from '@chakra-ui/react'
import { AboutTileDirection } from './AboutTileDirection'

interface Props {
	data: AboutTileData
	direction: AboutTileDirection
}

export function AboutTile(props: Props) {
	const image = props.data.image
	const direction = props.direction

	const imagePadding = {base: '20px', lg: '30px'}

	return (
		<Flex direction={'row'} w='100%'>
			{
				direction === AboutTileDirection.ImageStart && 
					<Flex direction={'row'}>
						<AboutImage data={image} />
						<Box w={imagePadding} />
					</Flex>
			}
			<Flex direction={'column'} flex={1}>
				<Text textStyle={'subTitle'}>{props.data.title}</Text>
				<Box h='10px' />
				<Text textStyle={'body'}>{props.data.description}</Text>
			</Flex>
			{
				direction === AboutTileDirection.ImageEnd && 
					<Flex direction={'row'}>
						<Box w={imagePadding} />
						<AboutImage data={image} />
					</Flex>
			}
		</Flex>
	)
}

function AboutImage(
	props: { data: ImageData }
) {
	const size = {base: '100px', sm: '150px', md: '200px', xl: '300px'}
	return (
		<Image
		  borderRadius='10px'
		  boxSize={size}
		  src={props.data.src}
		  alt={props.data.alt}
		/>
	)
}