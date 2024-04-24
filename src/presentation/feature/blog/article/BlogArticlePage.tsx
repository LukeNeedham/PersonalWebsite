import {Center, Flex, Text, VStack, Box} from "@chakra-ui/react";
import {BlogArticleProvider} from "../../../../domain/provider/BlogArticleProvider";
import { RootScaffold } from "presentation/common/RootScaffold";
import { NavBarProvider } from "domain/provider/NavBarProvider";
import { BlogArticlePageContent } from "./BlogArticlePageContent";

interface Props {
    articleId: string
}

export function BlogArticlePage(props: Props) {
    const article = BlogArticleProvider.getArticle(props.articleId)
    
    const title = article?.title ?? "Article not found"
    
    const content = article === undefined ? null : <BlogArticlePageContent content={article.content} />
    
    return (
        <RootScaffold selectedNavButton={NavBarProvider.blog}>
            <Flex direction={'column'}>
                <Center>
                    <Text textStyle={'mainTitle'} textAlign='center'>
                        {title}
                    </Text>
                </Center>
                <Box h='80px' />
                {content}
            </Flex>
        </RootScaffold>
    )
}