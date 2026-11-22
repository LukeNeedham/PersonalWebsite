import { LocalDate } from '@/domain/model/LocalDate'

export interface BlogArticle {
  id: string
  title: string
  image: string
  publishDate: LocalDate
}
