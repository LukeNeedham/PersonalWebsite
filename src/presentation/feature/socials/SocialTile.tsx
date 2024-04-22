import { Clickable } from 'presentation/common/Clickable'
import { Image, Flex, Text, Box } from '@chakra-ui/react'
import { SocialTileData } from 'domain/model/SocialTileData'

interface Props {
	data: SocialTileData
	onClick: () => void
}

export function SocialTile(props: Props) {
	return (
		<Clickable
			onClick={ () => props.onClick() }
			w='100%'
		>
			<Flex 
				direction='row' 
				w='100%'
				backgroundColor={props.data.backgroundColor}
			 	borderRadius='20px'
			 	paddingY='20px'
			 	paddingX='30px'
			>
				<Image
					boxSize={{base: '30px', md: '60px'}}
					src={props.data.icon.src}
					alt={props.data.icon.alt}
				/>
				<Box w={{base: '20px', lg: '40px'}} />
				<Flex direction='column' flex={1}>
					<Text 
						textStyle={'body'} 
						color={props.data.foregroundColor}
					>
						{props.data.description}
					</Text>
					<Box h='2px' />
					{ /* The url can be quite long, it needs to be wrappable */ }
					<Text 
						textStyle={'fine'} 
						color={props.data.foregroundColor}
						overflowWrap='anywhere'
					>
						{props.data.url}
					</Text>
				</Flex>
			</Flex>
		</Clickable>
	)
}