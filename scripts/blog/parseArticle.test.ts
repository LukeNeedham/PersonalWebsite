import { expect, test } from 'vitest'
import { parseArticle } from './parseArticle'

const source = `---
title: "Light: and Material"
image: /a.png
date: 2026-09-12
---
First paragraph.
`

test('reads the front matter and leaves the markdown', () => {
  expect(parseArticle('a', source)).toEqual({
    meta: { title: 'Light: and Material', image: '/a.png', date: '2026-09-12' },
    body: 'First paragraph.\n',
  })
})

test('an article with no front matter is an error that names the file', () => {
  expect(() => parseArticle('a', 'Just text')).toThrow('content/blog/a.md has no front matter')
})

test('a missing field is an error that names it', () => {
  expect(() => parseArticle('a', '---\ntitle: T\ndate: 2026-01-01\n---\nx')).toThrow("'image'")
})

test('a date that is not YYYY-MM-DD is an error', () => {
  expect(() => parseArticle('a', '---\ntitle: T\nimage: /a.png\ndate: 7/11/2026\n---\nx')).toThrow(
    'YYYY-MM-DD',
  )
})
