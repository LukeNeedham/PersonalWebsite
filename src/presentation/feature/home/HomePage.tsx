import { Box, Flex, Spacer, Center } from '@chakra-ui/react'
import { WelcomeSection } from 'presentation/feature/home/section/welcome/WelcomeSection'
import { AboutSection } from 'presentation/feature/home/section/about/AboutSection'
import { SocialsSection } from 'presentation/feature/home/section/socials/SocialsSection'
import { ProjectsSection } from 'presentation/feature/home/section/projects/ProjectsSection'
import { openInNewTab } from 'presentation/util/Window'

export function HomePage() {
  const betweenSectionSpace = '250px'
  return (
    <Center w='100%'>
      <Flex direction={'column'} w='80%'>
        <Box h='60px'/>
        <WelcomeSection/>
        <Box h='150px'/>
        <AboutSection/>
        <Box h={betweenSectionSpace}/>
        <SocialsSection 
          onTileClick={ (url) => openInNewTab(url) }
        />
        <Box h={betweenSectionSpace} />
        <ProjectsSection/>
        <Box h={betweenSectionSpace} />
      </Flex>
    </Center>
  )
}