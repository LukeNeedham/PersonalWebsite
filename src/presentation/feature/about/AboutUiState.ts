import type { AboutTileData } from '@/domain/model/AboutTileData'
import type { NavButtonData } from '@/domain/model/NavButtonData'

export interface AboutUiState {
  selectedNavButton: NavButtonData
  tiles: AboutTileData[]
}
