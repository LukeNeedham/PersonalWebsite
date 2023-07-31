import { Text, BoxProps } from '@chakra-ui/react'
import { Clickable } from 'presentation/common/Clickable'

interface Props extends BoxProps {
	name: string
	anchor: string
	openSection: (url: string) => void
}

export function SectionJumpButton(props: Props) {
	const {name, anchor, openSection, ...boxProps} = props 
	return (
		<Clickable 
			backgroundColor='#000' 
			borderRadius='20px' 
			onClick={ () => openSection('#' + anchor) } 
			{...boxProps}
		>
			<Text 
				color='#fff'
				textAlign='center'
				textStyle='fine'
				padding='20px'
				w='100%'
			>
				{name}
			</Text>
		</Clickable>
	)
}