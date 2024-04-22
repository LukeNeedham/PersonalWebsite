import { Box, Flex, Spacer, Center, Text, VStack } from '@chakra-ui/react'
import { ProjectBrailliac } from './brailliac/ProjectBrailliac'
import {openInCurrentTab} from "../../util/Window";
import { RootScaffold } from 'presentation/common/RootScaffold';
import { NavBarProvider } from 'domain/provider/NavBarProvider';

export function ProjectsPage() {
	
	return (
		<RootScaffold selectedNavButton={NavBarProvider.projects}>
	      <Flex direction={'column'}>
	      	<Center>
		      	<Text textStyle={'mainTitle'} textAlign='center'>
		      		Projects I’m proud of
		      	</Text>
	      	</Center>
	      	<Box h='120px' />
	      	<ProjectBrailliac openProject={(url) => openInCurrentTab(url)} />
	      </Flex>
        </RootScaffold>
	)
}