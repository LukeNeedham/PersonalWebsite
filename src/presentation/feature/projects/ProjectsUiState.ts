import type { NavButtonData } from '@/domain/model/NavButtonData'

export interface ProjectsUiState {
  selectedNavButton: NavButtonData
  videoDiary: VideoDiaryProject
}

/** Video Diary has no site of its own: its project links to the blog post about it. */
export interface VideoDiaryProject {
  imageUrl: string
  href: string
}
