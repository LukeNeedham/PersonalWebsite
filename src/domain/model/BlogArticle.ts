import {LocalDate} from "./LocalDate";

export interface BlogArticle {
    id: string
    title: string
    image: string
    publishDate: LocalDate
}