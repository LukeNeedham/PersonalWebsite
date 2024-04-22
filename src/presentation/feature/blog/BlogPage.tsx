import {Box, Center, Flex, Text} from "@chakra-ui/react";
import { NavBarProvider } from "domain/provider/NavBarProvider";
import { RootScaffold } from "presentation/common/RootScaffold";
import {BlogArticleProvider} from "../../../domain/provider/BlogArticleProvider";
import {BlogArticleList} from "./BlogArticleList";

export function BlogPage() {
    const articles = BlogArticleProvider.articles

    return (
        <RootScaffold selectedNavButton={NavBarProvider.blog}>
            <Flex direction={'column'}>
                <Center>
                    <Text textStyle={'mainTitle'} textAlign='center'>
                        My Blog
                    </Text>
                </Center>
                <Box h='80px' />
                <BlogArticleList articles={articles} />
            </Flex>
        </RootScaffold>
    )
}