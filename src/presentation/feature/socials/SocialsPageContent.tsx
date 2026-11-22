import { Box, Flex, Center, Text, VStack } from '@chakra-ui/react'
import { SocialTile } from '@/presentation/feature/socials/SocialTile'
import { RootScaffold } from '@/presentation/common/RootScaffold'
import type { SocialsUiState } from '@/presentation/feature/socials/SocialsUiState'

interface Props {
  uiState: SocialsUiState
}

/** All of the UI of the socials page. */
export function SocialsPageContent({ uiState }: Props) {
  return (
    <RootScaffold selectedNavButton={uiState.selectedNavButton}>
      <Flex direction={'column'}>
        <Center>
          <Text textStyle={'mainTitle'} textAlign="center">
            Where I hang out
          </Text>
        </Center>
        <Box h="80px" />
        <VStack gap={{ base: '15px', md: '30px' }}>
          {uiState.tiles.map((tile) => (
            <SocialTile data={tile.data} href={tile.href} key={tile.data.url} />
          ))}
        </VStack>
      </Flex>
    </RootScaffold>
  )
}
