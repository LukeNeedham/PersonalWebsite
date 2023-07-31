import { Box, Flex, Spacer, Center, Text, Image, Button } from '@chakra-ui/react'
import { Clickable } from 'presentation/common/Clickable'
import { ImageData } from 'domain/model/ImageData'

interface Props {
	title: string
	description: string
	image: ImageData
	openProject: () => void
}

export function ProjectBrailliacSubsection(props: Props) {
	return (
		<Flex direction={'row'} >
			<Flex direction={'column'} flex={1}>
				<Text textStyle='body' fontWeight={700}>{props.title}</Text>
	    		<Box h='10px'/>
				<Text textStyle='body'>{props.description}</Text>
				<Box h='40px'/>
	    		<Box flex={1}/>
	    		<Clickable w='100%' onClick={props.openProject}>
					<Text 
						textStyle='fine' 
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
	    	<Box w='30px'/>
	    	<Image
    			src={props.image.src}
    			alt={props.image.alt}
	  			width='200px'
	  			objectFit='contain'
	  			align='50% bottom'
			/>
	    </Flex>
    )
}