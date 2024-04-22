import {BlogArticle} from "../../../domain/model/BlogArticle";
import {Box, Text} from "@chakra-ui/react";
import React from "react";

interface Props {
    article: BlogArticle
}

export function BlogArticleListItem(props: Props) {
    return (
        <Box w={'full'} background={'#000'} paddingY={'20px'} paddingX={'20px'} borderRadius={'10px'}>
            <Text color={'#fff'}>{props.article.title}</Text>
        </Box>
    )
}