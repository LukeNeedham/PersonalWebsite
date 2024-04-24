import {BlogArticle} from "../../../domain/model/BlogArticle";
import {Flex, Text, VStack} from "@chakra-ui/react";
import { BlogArticleListItem } from "./BlogArticleListItem";
import {openInCurrentTab} from "../../util/Window";

interface Props {
    articles: BlogArticle[]
}

export function BlogArticleList(props: Props) {
    return (
        <VStack spacing={'20px'}>
            {
                props.articles.map(it =>
                    <BlogArticleListItem
                        key={it.title}
                        article={it}
                        onClick={() => openInCurrentTab(`/blog/${it.id}`)}
                    />
                )
            }
        </VStack>
    )
}