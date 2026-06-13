import { Box, Flex, Spacer, Center, Text, Image, Button } from '@chakra-ui/react'
import { ImageData } from 'domain/model/ImageData'

interface Props {
	title: string
	description: string
	image: ImageData
	href: string
}

export function ProjectBrailliacSubsection(props: Props) {
	return (
		<Flex direction={'row'} w={'100%'} >
			<Flex direction={'column'} flex={5}>
				<Text textStyle='body' fontWeight={700}>{props.title}</Text>
	    		<Box h='10px'/>
				<Text textStyle='body'>{props.description}</Text>
				<Box h='40px'/>
	    		<Box flex={1}/>
	    		<Box
					as='a'
					href={props.href}
					target='_blank'
					rel='noopener noreferrer'
					cursor='pointer'
					display='inline-flex'
					w='100%'
				>
					<Text 
						textStyle='body'
						backgroundColor='#000' 
						color='#fff' 
						borderRadius='10px' 
						paddingX='10px'
						paddingY={'15px'}
						textAlign='center'
						w='100%'
					>
						Learn more
					</Text>
				</Box>
	    	</Flex>
	    	<Box flex={1} />
	    	<Box flex={1.5} >
	    		<Flex direction={'column'} h='100%'>
	    			<Box flex={1} />
			    	<Image
		    			src={props.image.src}
		    			alt={props.image.alt}
			  			w={'100%'}
			  			objectFit='contain'
			  			align='50% bottom'
					/>
				</Flex>
			</Box>
	    </Flex>
    )
}