import type { NavButtonData } from '@/domain/model/NavButtonData'
import type { SocialTileData } from '@/domain/model/SocialTileData'

export interface SocialsUiState {
  selectedNavButton: NavButtonData
  tiles: SocialTileItem[]
}

/** One tile, with the absolute address it opens. */
export interface SocialTileItem {
  data: SocialTileData
  href: string
}
