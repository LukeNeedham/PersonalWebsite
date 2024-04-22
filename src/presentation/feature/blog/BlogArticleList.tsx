import {BlogArticle} from "../../../domain/model/BlogArticle";
import {Flex, Text} from "@chakra-ui/react";
import { BlogArticleListItem } from "./BlogArticleListItem";

interface Props {
    articles: BlogArticle[]
}

export function BlogArticleList(props: Props) {
    return (
        <Flex direction={'column'}>
            {
                props.articles.map(it => <BlogArticleListItem key={it.title} article={it} />)
            }
        </Flex>
    )
}