import { Box, VStack, Spacer, Center, Text } from '@chakra-ui/react'
import { AboutTile } from 'presentation/feature/home/section/about/tile/AboutTile'
import { AboutTileDirection } from 'presentation/feature/home/section/about/tile/AboutTileDirection'
import { AboutTileDataProvider } from 'domain/provider/AboutTileDataProvider'

export function AboutSection() {
	// todo: use real data
	const tileDatas = AboutTileDataProvider.tiles
	const tiles = tileDatas.map((data, index) => {
		const direction = (index % 2 == 0) ? AboutTileDirection.ImageStart : AboutTileDirection.ImageEnd
		return <AboutTile data={data} direction={direction} key={data.title} />
    })
	return (
		<VStack spacing='80px'>
			{ tiles }
		</VStack>
	)
}