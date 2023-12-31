import { Box, Flex, Spacer, Center, Text, VStack } from '@chakra-ui/react'
import { SocialTileDataProvider } from 'domain/provider/SocialTileDataProvider'
import { SocialTile } from 'presentation/feature/home/section/socials/SocialTile'
import { getAbsoluteSocialUrl } from 'domain/model/SocialTileData'

interface Props {
	onTileClick: (url: string) => void
	anchor: string
}

export function SocialsSection(props: Props) {
	const tiles = SocialTileDataProvider.tiles.map((data) => {
		return <SocialTile 
			data={data} 
			onClick={ () => props.onTileClick(getAbsoluteSocialUrl(data)) } 
			key={data.url}
		/>
    })

	return (
      <Flex direction={'column'} id={props.anchor}>
 		{ /* A little padding on the top so the anchor isn't right at the top of the content */ }
		<Box h='50px' />
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
	)
}