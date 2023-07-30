import { Clickable } from 'presentation/common/Clickable'
import { Image, Flex, Text, Box } from '@chakra-ui/react'

interface Props {
	data: SocialTileData
	onClick: () => void
}

export function SocialTile(props: Props) {
	return (
		<Clickable 
			as="div" 
			onClick={ () => props.onClick() }
			cursor='pointer'
		>
			<Flex 
				direction='row' 
				backgroundColor={props.data.backgroundColor}
			 	borderRadius='20px'
			 	paddingY='30px'
			 	paddingX='30px'
			>
				<Image
					src={props.data.icon}
					boxSize='100px'
					src={props.data.icon.src}
					alt={props.data.icon.alt}
				/>
				<Box w='40px' />
				<Flex direction='column' flex={1}>
					<Text 
						textStyle={'body'} 
						color={props.data.foregroundColor}
					>
						{props.data.description}
					</Text>
					<Box h='5px' />
					<Text 
						textStyle={'fine'} 
						color={props.data.foregroundColor}
					>
						{props.data.url}
					</Text>
				</Flex>
			</Flex>
		</Clickable>
	)
}