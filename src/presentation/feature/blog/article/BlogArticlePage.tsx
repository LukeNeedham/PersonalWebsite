'use client'

import {Center, Flex, Text, VStack, Box} from "@chakra-ui/react";
import {BlogArticleProvider} from "../../../../domain/provider/BlogArticleProvider";
import { RootScaffold } from "presentation/common/RootScaffold";
import { NavBarProvider } from "domain/provider/NavBarProvider";
import { BlogArticlePageContent } from "./BlogArticlePageContent";

interface Props {
    articleId: string
    content?: string
}

export function BlogArticlePage(props: Props) {
    const article = BlogArticleProvider.getArticle(props.articleId)
    
    const title = article?.title ?? "Article not found"
    const date = article?.publishDate?.format() ?? ""
    
    const content = props.content === undefined ? null : <BlogArticlePageContent content={props.content} />
    
    return (
        <RootScaffold selectedNavButton={NavBarProvider.blog}>
            <Flex direction={'column'}>
                <Center>
                    <Text textStyle={'mainTitle'} textAlign='center'>
                        {title}
                    </Text>
                </Center>
                <Box h='10px' />
                <Center>
                    <Text textStyle={'body'} textAlign='center'>
                        {date}
                    </Text>
                </Center>
                <Box h='80px' />
                {content}
            </Flex>
        </RootScaffold>
    )
}