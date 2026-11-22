import { Box } from '@chakra-ui/react'
import type { BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
  href: string
}

/** A link that opens another site in a new tab. It takes the style props of a box, so it can be laid out like one. */
export function ExternalLink({ href, children, ...boxProps }: Props) {
  return (
    <Box asChild cursor="pointer" {...boxProps}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Box>
  )
}
