import { AboutTileDataProvider } from '@/domain/provider/AboutTileDataProvider'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { AboutPageContent } from '@/presentation/feature/about/AboutPageContent'
import type { AboutUiState } from '@/presentation/feature/about/AboutUiState'

/**
 * Connects the about page to the app: it reads what the page shows from the providers and hands it down. The page has no
 * state of its own, so it has no view model, and it is a server component: the page is built ahead.
 */
export function AboutPage() {
  const uiState: AboutUiState = {
    selectedNavButton: NavBarProvider.about,
    tiles: AboutTileDataProvider.tiles,
  }
  return <AboutPageContent uiState={uiState} />
}
