import { Box, VStack, Flex } from '@chakra-ui/react'
import { WelcomeSection } from '@/presentation/feature/about/WelcomeSection'
import { AboutTileDirection } from '@/presentation/feature/about/tile/AboutTileDirection'
import { AboutTile } from '@/presentation/feature/about/tile/AboutTile'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import type { AboutUiState } from '@/presentation/feature/about/AboutUiState'

interface Props {
  uiState: AboutUiState
}

/** All of the UI of the about page. */
export function AboutPageContent({ uiState }: Props) {
  const tiles = uiState.tiles.map((data, index) => {
    const direction = index % 2 == 0 ? AboutTileDirection.ImageStart : AboutTileDirection.ImageEnd
    return <AboutTile data={data} direction={direction} key={data.title} />
  })
  return (
    <RootScaffold selectedNavButton={uiState.selectedNavButton}>
      <Flex direction="column">
        <WelcomeSection />
        <Box h="120px" />
        <VStack gap="80px">{tiles}</VStack>
      </Flex>
    </RootScaffold>
  )
}
