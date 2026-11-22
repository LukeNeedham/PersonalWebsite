import type { NavButtonData } from '@/domain/model/NavButtonData'

export interface BlogUiState {
  selectedNavButton: NavButtonData
  articles: BlogArticleItem[]
}

/** One article of the list, as it is shown: the date is text and the link is made. */
export interface BlogArticleItem {
  id: string
  title: string
  image: string
  date: string
  href: string
}
