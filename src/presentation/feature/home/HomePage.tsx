import { Box, Flex, Spacer, Center } from '@chakra-ui/react'
import { WelcomeSection } from 'presentation/feature/home/section/welcome/WelcomeSection'
import { AboutSection } from 'presentation/feature/home/section/about/AboutSection'
import { SocialsSection } from 'presentation/feature/home/section/socials/SocialsSection'
import { ProjectsSection } from 'presentation/feature/home/section/projects/ProjectsSection'
import { openInCurrentTab, openInNewTab } from 'presentation/util/Window'
import { UrlProvider } from 'domain/provider/UrlProvider'

export function HomePage() {
  const betweenSectionSpace = '200px'
  return (
    <Center w='100%'>
      <Flex direction={'column'} w={{ base: '90%', md: '80%', lg: '70%' }}>
        <Box h='60px'/>
        <WelcomeSection anchor={UrlProvider.anchor.welcome} openSection={openInCurrentTab}/>
        <Box h='100px'/>
        <AboutSection anchor={UrlProvider.anchor.about}/>
        <Box h={betweenSectionSpace} />
        <ProjectsSection openProject={openInNewTab} anchor={UrlProvider.anchor.projects} />
        <Box h={betweenSectionSpace} />
        <SocialsSection 
          onTileClick={openInNewTab}
          anchor={UrlProvider.anchor.socials}
        />
        <Box h={betweenSectionSpace}/>
      </Flex>
    </Center>
  )
}