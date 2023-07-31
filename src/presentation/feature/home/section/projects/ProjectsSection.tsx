import { Box, Flex, Spacer, Center, Text, VStack } from '@chakra-ui/react'
import { ProjectBrailliac } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailliac'

export function ProjectsSection() {
	return (
      <Flex direction={'column'}>
      	<Center>
	      	<Text textStyle={'mainTitle'}>
	      		Projects I’m proud of
	      	</Text>
      	</Center>
      	<Box h='80px' />
      	<ProjectBrailliac />
      </Flex>
	)
}