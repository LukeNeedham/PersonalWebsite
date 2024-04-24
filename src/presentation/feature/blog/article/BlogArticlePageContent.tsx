import {Center, Flex, Text, VStack, Box, ListItem, UnorderedList} from "@chakra-ui/react"
import Markdown, { Components } from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

interface Props {
    content: string
}

export function BlogArticlePageContent(props: Props) {
    const content = props.content
    
    const customComponents: Components = {
        li(props) {
            return (
                <ListItem marginBottom={'10px'} {...props} />
            )
        },
        ul(props) {
            return <UnorderedList marginBottom={'30px'} {...props} />
        },
        h2(props) {
            return (
                <Text textStyle={'subTitle'} marginTop={'60px'} marginBottom={'30px'} {...props} />
            )
        },
        code(props) {
            const {children, className, node, ...rest} = props
            const match = /language-(\w+)/.exec(className || '')
            if(match === null) {
                return (
                    <code {...rest} className={className} style={{background: '#eee'}}>
                        {children}
                    </code>
                    )
            }
            return (
                <Box borderRadius={'5px'} overflow={'hidden'} marginBottom={'25px'} marginTop={'10px'}>
                    { /* Types for SyntaxHighlighter are broken */ }
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
        }
    }

    const components = ChakraUIRenderer(customComponents)

    return (
        <Markdown
            components={components}
        >
            {content}
        </Markdown>
    )
}