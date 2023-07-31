import { Box, Flex, Spacer, Center, Text, Image } from '@chakra-ui/react'
import { ProjectBrailleTutor } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailleTutor'
import { ProjectBrailleKeyboard } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailleKeyboard'

export function ProjectBrailliac() {
	return (
		<Flex direction={'column'}>
			<Flex direction={'row'}>
				<Image
	    			src='https://brailliac.com/image/logo_braille_tutor.webp'
	    			alt='Brailliac logo'
		  			boxSize='200px'
    			/>
	    		<Box w='30px'/>
				<Flex direction={'column'} flex={1}>
					<Text textStyle='subTitle'>Brailliac</Text>
					<Text textStyle='body'>Brailliac is a collection of apps I design and develop to help people learn Braille.</Text>
					<Text textStyle='body'>You can learn all about it at <a>Brailliac.com</a></Text>
	    		</Flex>
	    	</Flex>
	    	<Box h='100px'/>
	    	<Flex direction={'row'}>
	    		<Box flex={1}>
	    			<ProjectBrailleTutor />
	    		</Box>
	    		<Box w='100px'/>
	    		<Box flex={1}>
	    			<ProjectBrailleKeyboard />
	    		</Box>
	    	</Flex>
	    </Flex>
    )
}