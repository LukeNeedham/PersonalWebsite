import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid } from '@chakra-ui/react'
import { ProjectBrailleTutor } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailleTutor'
import { ProjectBrailleKeyboard } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailleKeyboard'
import { Clickable } from 'presentation/common/Clickable'

interface Props {
	openProject: (url: string) => void
}

export function ProjectBrailliac(props: Props) {
	function openBrailliac() {
		const url = 'https://Brailliac.com'
		props.openProject(url)
	}
	return (
		<Flex direction={'column'}>
			<Flex direction={'row'}>
				<Clickable onClick={openBrailliac} >
					<Image
		    			src='https://brailliac.com/image/logo_braille_tutor.webp'
		    			alt='Brailliac logo'
			  			boxSize='200px'
	    			/>
				</Clickable>

	    		<Box w='30px'/>
				<Flex direction={'column'} flex={1}>
					<Text textStyle='subTitle'>Brailliac</Text>
					<Text textStyle='body'>Brailliac is a collection of apps I design and develop to help people learn Braille.</Text>
	    			<Text textStyle={'body'}>
						You can learn all about it at{' '}
						<Clickable onClick={openBrailliac} as='span' textStyle='body' textDecoration='underline'>
							Brailliac.com
						</Clickable>
	    			</Text>
	    		</Flex>
	    	</Flex>
	    	<Box h='100px'/>
	    	<SimpleGrid minChildWidth='400px' spacing='100px'>
	    		<ProjectBrailleTutor openProject={props.openProject} />
	    		<ProjectBrailleKeyboard openProject={props.openProject} />
	    	</SimpleGrid>
	    </Flex>
    )
}