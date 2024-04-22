import { Box, VStack, Flex, Center, Text } from '@chakra-ui/react'
import { AboutTileDataProvider } from 'domain/provider/AboutTileDataProvider'
import { WelcomeSection } from './WelcomeSection';
import { AboutTileDirection } from './tile/AboutTileDirection';
import { AboutTile } from './tile/AboutTile';
import {RootScaffold} from "../../common/RootScaffold";
import {NavBarProvider} from "../../../domain/provider/NavBarProvider";

export function AboutPage() {
	const tileDatas = AboutTileDataProvider.tiles
	const tiles = tileDatas.map((data, index) => {
		const direction = (index % 2 == 0) ? AboutTileDirection.ImageStart : AboutTileDirection.ImageEnd
		return <AboutTile data={data} direction={direction} key={data.title} />
    })
	return (
		<RootScaffold selectedNavButton={NavBarProvider.about}>
			<Flex direction='column'>
				<WelcomeSection/>
				<Box h='120px'/>
				<VStack spacing='80px'>
					{ tiles }
				</VStack>
			</Flex>
		</RootScaffold>
	)
}