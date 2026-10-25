import {Center, Flex, Text, VStack, Box, ListItem, UnorderedList, Image} from "@chakra-ui/react"
import Markdown, {Components} from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import {androidstudio} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import {Link} from "@chakra-ui/react"

interface Props {
    content: string
}

export function BlogArticlePageContent(props: Props) {
    const customComponents: Components = {
        li(props) {
            return (
                <ListItem marginTop={'10px'} marginBottom={'5px'} textStyle={'body'} {...props} />
            )
        },
        ul(props) {
            return <UnorderedList marginBottom={'30px'} textStyle={'body'} {...props} />
        },
        h1(props) {
            return (
                <Text textStyle={'subTitle'} marginTop={'60px'} marginBottom={'30px'} {...props} />
            )
        },
        h2(props) {
            return (
                <Text textStyle={'subTitle'} marginTop={'60px'} marginBottom={'30px'} {...props} />
            )
        },
        code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            if (match === null) {
                return (
                    <code {...rest} className={className} style={{background: '#eee'}}>
                        {children}
                    </code>
                )
            }
            return (
                <Box borderRadius={'5px'} overflow={'hidden'} marginBottom={'25px'} marginTop={'10px'}>
                    { /* Types for SyntaxHighlighter are broken */}
                    {/* @ts-ignore */}
                    <SyntaxHighlighter
                        {...rest}
                        PreTag="div"
                        language={match[1]}
                        style={androidstudio}
                    >
                        {String(children).replace(/\n$/, '')}
                    </SyntaxHighlighter>
                </Box>
            )
        },
        a(props) {
            return (
                <Link href={props.href} textDecoration={'underline'} {...props} />
            )
        },
        p(props) {
            return (
                <Text textStyle={'body'} marginTop={'10px'} marginBottom={'10px'} {...props} />
            )
        }
    }

    const components = ChakraUIRenderer(customComponents)

    return (
        <Markdown
            components={components}
        >
            {props.content}
        </Markdown>
    )
}