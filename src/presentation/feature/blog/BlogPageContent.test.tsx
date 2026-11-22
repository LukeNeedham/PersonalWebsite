import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { BlogPageContent } from '@/presentation/feature/blog/BlogPageContent'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

const articles = [
  { id: 'one', title: 'First post', image: '/one.png', date: '7/11/2026', href: '/blog/one' },
  { id: 'two', title: 'Second post', image: '/two.png', date: '1/1/2025', href: '/blog/two' },
]

test('lists every article with its date, linked to its page', () => {
  renderWithChakra(
    <BlogPageContent uiState={{ selectedNavButton: NavBarProvider.blog, articles }} />,
  )

  expect(screen.getByText('My Blog')).toBeDefined()
  expect(screen.getByText('7/11/2026')).toBeDefined()
  const link = screen.getByText('Second post').closest('a')
  expect(link?.getAttribute('href')).toBe('/blog/two')
})

test('with no articles it still shows the page', () => {
  renderWithChakra(
    <BlogPageContent uiState={{ selectedNavButton: NavBarProvider.blog, articles: [] }} />,
  )
  expect(screen.getByText('My Blog')).toBeDefined()
})
