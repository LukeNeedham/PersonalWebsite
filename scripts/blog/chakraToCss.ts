import {css, toCSSVar} from "@chakra-ui/react"
import {theme} from "../../src/presentation/theme/Theme"

type StyleObject = Record<string, unknown>

const resolvedTheme = toCSSVar(theme)

function toKebabCase(property: string): string {
    return property.replace(/[A-Z]/g, it => `-${it.toLowerCase()}`)
}

function declarations(style: StyleObject, indent: string): string {
    return Object.entries(style)
        .filter(([, value]) => typeof value !== 'object')
        .map(([property, value]) => `${indent}${toKebabCase(property)}: ${value};\n`)
        .join('')
}

/** Compiles Chakra style props to CSS rules, resolving text styles, tokens and responsive values. */
export function chakraToCss(styles: Record<string, StyleObject>): string {
    return Object.entries(styles).map(([selector, chakraStyle]) => {
        const resolved = css(chakraStyle)(resolvedTheme) as StyleObject
        const mediaQueries = Object.entries(resolved)
            .filter(([, value]) => typeof value === 'object')
            .map(([query, nested]) => ({query, body: declarations(nested as StyleObject, '        ')}))
            .filter(it => it.body !== '')
            .map(it => `@media ${it.query.replace(/^@media /, '')} {\n    ${selector} {\n${it.body}    }\n}\n`)
            .join('')
        return `${selector} {\n${declarations(resolved, '    ')}}\n${mediaQueries}`
    }).join('\n')
}
