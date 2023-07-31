import { Box, VStack, Flex, Center, Text } from '@chakra-ui/react'
import { AboutTile } from 'presentation/feature/home/section/about/tile/AboutTile'
import { AboutTileDirection } from 'presentation/feature/home/section/about/tile/AboutTileDirection'
import { AboutTileDataProvider } from 'domain/provider/AboutTileDataProvider'

interface Props {
	anchor: string
}

export function AboutSection(props: Props) {
	const tileDatas = AboutTileDataProvider.tiles
	const tiles = tileDatas.map((data, index) => {
		const direction = (index % 2 == 0) ? AboutTileDirection.ImageStart : AboutTileDirection.ImageEnd
		return <AboutTile data={data} direction={direction} key={data.title} />
    })
	return (
		<Flex direction='column' id={props.anchor}>
			{ /* A little padding on the top so the anchor isn't right at the top of the content */ }
			<Box h='50px' />
			<VStack spacing='80px'>
				{ tiles }
			</VStack>
		</Flex>
	)
}