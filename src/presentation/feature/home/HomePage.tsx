import { Box, Flex, Spacer, Center } from '@chakra-ui/react'
import { WelcomeSection } from 'presentation/feature/home/section/WelcomeSection'
import { AboutSection } from 'presentation/feature/home/section/about/AboutSection'
import { SocialsSection } from 'presentation/feature/home/section/socials/SocialsSection'
import { ProjectsSection } from 'presentation/feature/home/section/ProjectsSection'
import { openInNewTab } from 'presentation/util/Window'

export function HomePage() {
  return (
    <Center w='100%'>
      <Flex direction={'column'} w='80%'>
        <Box h='60px'/>
        <WelcomeSection/>
        <Box h='150px'/>
        <AboutSection/>
        <Box h='300px'/>
        <SocialsSection 
          onTileClick={ (url) => openInNewTab(url) }
        />
        <ProjectsSection/>
        <Box h='300px'/>
      </Flex>
    </Center>
  )
}