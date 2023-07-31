import { Box, Flex, Spacer, Center, Text, Image, Button } from '@chakra-ui/react'
import { Clickable } from 'presentation/common/Clickable'

interface Props {
	title: string
	description: string
	image: ImageData
}

export function ProjectBrailliacSubsection(props: Props) {
	return (
		<Flex direction={'row'} >
			<Flex direction={'column'} flex={1}>
				<Text textStyle='body' fontWeight={700}>{props.title}</Text>
	    		<Box h='10px'/>
				<Text textStyle='body'>{props.description}</Text>
	    		<Box h='40px'/>
	    		<Clickable as='div' w='100%' cursor='pointer'>
					<Text 
						textStyle='body' 
						backgroundColor='#000' 
						color='#fff' 
						borderRadius='10px' 
						padding='10px' 
						textAlign='center'
						w='100%'
					>
						Learn more
					</Text>
				</Clickable>
	    	</Flex>
	    	<Box w='20px'/>
	    	<Image
	    			src={props.image.src}
	    			alt={props.image.alt}
		  			width='200px'
    			/>
	    </Flex>
    )
}