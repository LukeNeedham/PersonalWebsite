import { BlogArticle } from "domain/model/BlogArticle"

const stringProvider: BlogArticle = {
    id: 'string-provider',
    title: 'String Localisation in Kotlin',
    image: '/asset/image/blog/string-provider.png',
    publishDate: '23/4/2024',
    contentFile: '/asset/blogcontent/string-provider.md',
}

class BlogArticleProviderImpl {
    readonly articles: BlogArticle[] = [
        stringProvider,
    ]

    getArticle(id: string): BlogArticle | undefined {
        return this.articles.find(it => it.id === id)
    }
}

export const BlogArticleProvider = new BlogArticleProviderImpl()