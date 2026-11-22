import { SocialTileDataProvider } from '@/domain/provider/SocialTileDataProvider'
import { getAbsoluteSocialUrl } from '@/domain/model/SocialTileData'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { SocialsPageContent } from '@/presentation/feature/socials/SocialsPageContent'
import type { SocialsUiState } from '@/presentation/feature/socials/SocialsUiState'

/** Connects the socials page to the app: it reads the tiles from the provider and hands them down. No state, so no view model. */
export function SocialsPage() {
  const uiState: SocialsUiState = {
    selectedNavButton: NavBarProvider.socials,
    tiles: SocialTileDataProvider.tiles.map((data) => ({
      data,
      href: getAbsoluteSocialUrl(data),
    })),
  }
  return <SocialsPageContent uiState={uiState} />
}
