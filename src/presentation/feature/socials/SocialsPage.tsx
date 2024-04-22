import { Box, Flex, Spacer, Center, Text, VStack } from '@chakra-ui/react'
import { SocialTileDataProvider } from 'domain/provider/SocialTileDataProvider'
import { getAbsoluteSocialUrl } from 'domain/model/SocialTileData'
import { SocialTile } from './SocialTile'
import { RootScaffold } from 'presentation/common/RootScaffold'
import { NavBarProvider } from 'domain/provider/NavBarProvider'
import {openInNewTab} from "../../util/Window";


export function SocialsPage() {
	const tiles = SocialTileDataProvider.tiles.map((data) => {
		return <SocialTile 
			data={data} 
			onClick={ () => openInNewTab(getAbsoluteSocialUrl(data)) } 
			key={data.url}
		/>
    })

	return (
		<RootScaffold selectedNavButton={NavBarProvider.socials}>
	      <Flex direction={'column'}>
	      	<Center>
		      	<Text textStyle={'mainTitle'} textAlign='center'>
		      		Where I hang out
		      	</Text>
	      	</Center>
	      	<Box h='80px' />
	      	<VStack spacing={{base: '15px', md: '30px'}}>
				{ tiles }
			</VStack>
	      </Flex>
        </RootScaffold>
	)
}