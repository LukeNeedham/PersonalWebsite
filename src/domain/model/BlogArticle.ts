import {LocalDate} from "./LocalDate";

export interface BlogArticle {
    id: string
    title: string
    image: string
    contentFile: string
    publishDate: LocalDate
}