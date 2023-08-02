import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio } from '@chakra-ui/react'
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
				<AspectRatio ratio={1} flex={4} maxW='150px' >
					<Clickable onClick={openBrailliac}>
						<Flex direction={'column'} h='100%' w='100%' alignItems='start'>
							<Image
				    			src='https://brailliac.com/image/logo_braille_tutor.webp'
				    			alt='Brailliac logo'
				    			w='100%'
			    			/>
			    			<Box flex={1} />
		    			</Flex>
					</Clickable>
				</AspectRatio>
	    		<Box flex={1} maxW='50px' />
				<Flex direction={'column'} flex={8}>
					<Text textStyle='subTitle'>Brailliac</Text>
					<Box h='10px' />
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
	    	<SimpleGrid minChildWidth='500px' spacing='100px'>
	    		<ProjectBrailleTutor openProject={props.openProject} />
	    		<ProjectBrailleKeyboard openProject={props.openProject} />
	    	</SimpleGrid>
	    </Flex>
    )
}