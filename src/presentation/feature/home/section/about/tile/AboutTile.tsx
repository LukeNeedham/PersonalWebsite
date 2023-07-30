import { AboutTileDirection } from 'presentation/feature/home/section/about/tile/AboutTileDirection'
import { Flex, Text, Image, Box } from '@chakra-ui/react'

interface Props {
	data: AboutTileData
	direction: AboutTileDirection
}

export function AboutTile(props: Props) {
	const image = props.data.image
	const direction = props.direction
	console.log(direction)
	console.log(image)

	return (
		<Flex direction={'row'} w='100%'>
			{
				direction === AboutTileDirection.ImageStart && 
					<Flex direction={'row'}>
						<AboutImage data={image} />
						<Box w='30px' />
					</Flex>
			}
			<Flex direction={'column'} flex={1}>
				<Text textStyle={'subTitle'}>{props.data.title}</Text>
				<Text textStyle={'body'}>{props.data.description}</Text>
			</Flex>
			{
				direction === AboutTileDirection.ImageEnd && 
					<Flex direction={'row'}>
						<Box w='30px' />
						<AboutImage data={image} />
					</Flex>
			}
		</Flex>
	)
}

function AboutImage(
	props: { data: ImageData }
) {
	return (
		<Image
		  borderRadius='10px'
		  boxSize='250px'
		  src={props.data.src}
		  alt={props.data.alt}
		/>
	)
}