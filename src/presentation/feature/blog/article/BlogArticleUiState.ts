import type { NavButtonData } from '@/domain/model/NavButtonData'

export interface BlogArticleUiState {
  selectedNavButton: NavButtonData
  title: string
  date: string
  /** The pre-rendered HTML of the article body; undefined when there is no such article. */
  contentHtml?: string
}
