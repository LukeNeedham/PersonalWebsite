import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { AboutPageContent } from '@/presentation/feature/about/AboutPageContent'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

const tiles = [
  {
    image: { src: '/a.png', alt: 'First picture' },
    title: 'First',
    description: 'About the first',
  },
  {
    image: { src: '/b.png', alt: 'Second picture' },
    title: 'Second',
    description: 'About the second',
  },
]

test('shows the welcome and every tile it is given', () => {
  renderWithChakra(
    <AboutPageContent uiState={{ selectedNavButton: NavBarProvider.about, tiles }} />,
  )

  expect(screen.getByText('Luke Needham')).toBeDefined()
  expect(screen.getByText('First')).toBeDefined()
  expect(screen.getByText('About the second')).toBeDefined()
  expect(screen.getByAltText('Second picture')).toBeDefined()
})

test('the navigation links to every page', () => {
  renderWithChakra(
    <AboutPageContent uiState={{ selectedNavButton: NavBarProvider.about, tiles }} />,
  )

  const hrefs = screen.getAllByRole('link').map((it) => it.getAttribute('href'))
  expect(hrefs).toEqual(['/about', '/projects', '/blog', '/socials'])
})
