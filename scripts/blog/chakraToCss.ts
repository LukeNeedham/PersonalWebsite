import type { SystemStyleObject } from '@chakra-ui/react'
import { system } from '@/presentation/theme/system'

type StyleObject = Record<string, unknown>

function toKebabCase(property: string): string {
  return property.replace(/[A-Z]/g, (it) => `-${it.toLowerCase()}`)
}

function declarations(style: StyleObject, indent: string): string {
  return Object.entries(style)
    .filter(([, value]) => typeof value !== 'object')
    .map(([property, value]) => `${indent}${toKebabCase(property)}: ${value};\n`)
    .join('')
}

/** Compiles Chakra style props to CSS rules, resolving text styles, tokens and responsive values. */
export function chakraToCss(styles: Record<string, StyleObject>): string {
  return Object.entries(styles)
    .map(([selector, chakraStyle]) => {
      const resolved = system.css(chakraStyle as SystemStyleObject) as StyleObject
      const mediaQueries = Object.entries(resolved)
        .filter(([, value]) => typeof value === 'object')
        .map(([query, nested]) => ({
          query,
          body: declarations(nested as StyleObject, '        '),
        }))
        .filter((it) => it.body !== '')
        .map(
          (it) =>
            `@media ${it.query.replace(/^@media /, '')} {\n    ${selector} {\n${it.body}    }\n}\n`,
        )
        .join('')
      return `${selector} {\n${declarations(resolved, '    ')}}\n${mediaQueries}`
    })
    .join('\n')
}
