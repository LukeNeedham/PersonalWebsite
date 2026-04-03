import {Box, Flex, Spacer, Center, Text, VStack} from '@chakra-ui/react'
import {ProjectBrailliac} from './brailliac/ProjectBrailliac'
import {RootScaffold} from 'presentation/common/RootScaffold';
import {NavBarProvider} from 'domain/provider/NavBarProvider';
import {ProjectPersonalWebsite} from './personalwebsite/ProjectPersonalWebsite';
import {ProjectVideoDiary} from "./videodiary/ProjectVideoDiary";

export function ProjectsPage() {

	return (
		<RootScaffold selectedNavButton={NavBarProvider.projects}>
			<Flex direction={'column'}>
				<Center>
					<Text textStyle={'mainTitle'} textAlign='center'>
						Projects I&apos;m proud of
					</Text>
				</Center>
				<Box h='120px'/>
				<ProjectBrailliac />
				<Box h='150px'/>
				<ProjectVideoDiary />
				<Box h='100px'/>
				<ProjectPersonalWebsite />
			</Flex>
		</RootScaffold>
	)
}
