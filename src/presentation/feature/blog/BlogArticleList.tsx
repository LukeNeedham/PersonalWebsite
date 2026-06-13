import {BlogArticle} from "../../../domain/model/BlogArticle";
import {Flex, Text, VStack} from "@chakra-ui/react";
import { BlogArticleListItem } from "./BlogArticleListItem";

interface Props {
    articles: BlogArticle[]
}

export function BlogArticleList(props: Props) {
    return (
        <VStack spacing={'20px'} w={'full'}>
            {
                props.articles.map(it =>
                    <BlogArticleListItem
                        key={it.title}
                        article={it}
                        href={`/blog/${it.id}`}
                    />
                )
            }
        </VStack>
    )
}