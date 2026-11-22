import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { SocialsPageContent } from '@/presentation/feature/socials/SocialsPageContent'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

const data = {
  backgroundColor: '#000000',
  foregroundColor: '#FFFFFF',
  icon: { src: '/icon.svg', alt: 'Example' },
  description: 'Find me on Example',
  url: 'example.com/luke',
  urlScheme: 'https://',
}

test('every tile opens its address in a new tab', () => {
  renderWithChakra(
    <SocialsPageContent
      uiState={{
        selectedNavButton: NavBarProvider.socials,
        tiles: [{ data, href: 'https://example.com/luke' }],
      }}
    />,
  )

  const link = screen.getByText('Find me on Example').closest('a')
  expect(link?.getAttribute('href')).toBe('https://example.com/luke')
  expect(link?.getAttribute('target')).toBe('_blank')
  expect(link?.getAttribute('rel')).toBe('noopener noreferrer')
  expect(screen.getByText('example.com/luke')).toBeDefined()
})
