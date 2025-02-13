import {BlogArticle} from "domain/model/BlogArticle"
import {LocalDate} from "domain/model/LocalDate"

class BlogArticleProviderImpl {
    readonly articlesMap = {
        stringProvider: {
            id: 'string-provider',
            title: 'String Localisation in Kotlin',
            image: '/asset/image/blog/string-provider.png',
            publishDate: new LocalDate(23, 4, 2024),
            contentFile: '/asset/blogcontent/string-provider.md',
        },
        videoDiary: {
            id: 'video-diary',
            title: 'Video Diary',
            image: '/asset/image/blog/video-diary.png',
            publishDate: new LocalDate(13, 2, 2025),
            contentFile: '/asset/blogcontent/video-diary.md',
        }
    }

    readonly articles: BlogArticle[] = Object.values(this.articlesMap).sort((a, b) => {
        const dateA = a.publishDate
        const dateB = b.publishDate

        function compare(componentA: number, componentB: number) {
            if (componentA < componentB) {
                return 1
            } else if (componentA > componentB) {
                return -1
            } else {
                return 0
            }
        }

        // Sort by date
        const compareYear = compare(dateA.year, dateB.year)
        if (compareYear != 0) {
            return compareYear
        }

        const compareMonth = compare(dateA.month, dateB.month)
        if (compareMonth != 0) {
            return compareMonth
        }

        const compareDay = compare(dateA.day, dateB.day)
        if (compareDay != 0) {
            return compareDay
        }

        // Tie-break identical dates by comparing ids (which are always unique)
        return a.id.localeCompare(b.id)
    })

    getArticle(id: string): BlogArticle | undefined {
        return this.articles.find(it => it.id === id)
    }
}

export const BlogArticleProvider = new BlogArticleProviderImpl()