import { Box, Flex, Center, Text } from '@chakra-ui/react'
import { ProjectBrailliac } from '@/presentation/feature/projects/brailliac/ProjectBrailliac'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import { ProjectPersonalWebsite } from '@/presentation/feature/projects/personalwebsite/ProjectPersonalWebsite'
import { ProjectVideoDiary } from '@/presentation/feature/projects/videodiary/ProjectVideoDiary'
import type { ProjectsUiState } from '@/presentation/feature/projects/ProjectsUiState'

interface Props {
  uiState: ProjectsUiState
}

/** All of the UI of the projects page. */
export function ProjectsPageContent({ uiState }: Props) {
  return (
    <RootScaffold selectedNavButton={uiState.selectedNavButton}>
      <Flex direction={'column'}>
        <Center>
          <Text textStyle={'mainTitle'} textAlign="center">
            Projects I&apos;m proud of
          </Text>
        </Center>
        <Box h="120px" />
        <ProjectBrailliac />
        <Box h="150px" />
        <ProjectVideoDiary imageUrl={uiState.videoDiary.imageUrl} href={uiState.videoDiary.href} />
        <Box h="100px" />
        <ProjectPersonalWebsite />
      </Flex>
    </RootScaffold>
  )
}
