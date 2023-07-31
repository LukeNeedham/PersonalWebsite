import { Box, Flex, Spacer, Center, Text, VStack } from '@chakra-ui/react'
import { ProjectBrailliac } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailliac'

interface Props {
	openProject: (url: string) => void
	anchor: string
}

export function ProjectsSection(props: Props) {
	return (
      <Flex direction={'column'} id={props.anchor}>
      	<Center>
	      	<Text textStyle={'mainTitle'} textAlign='center'>
	      		Projects I’m proud of
	      	</Text>
      	</Center>
      	<Box h='100px' />
      	<ProjectBrailliac openProject={props.openProject} />
      </Flex>
	)
}