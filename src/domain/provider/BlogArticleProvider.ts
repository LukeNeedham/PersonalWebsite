import {BlogArticle} from "../model/BlogArticle";

const stringProvider: BlogArticle = {
    title: 'String Localisation in Pure Kotlin',
    image: '',
    publishDate: '23/4/2024',
    content: '',
}

export const BlogArticleProvider = {
    articles: [
        stringProvider,
    ]
}