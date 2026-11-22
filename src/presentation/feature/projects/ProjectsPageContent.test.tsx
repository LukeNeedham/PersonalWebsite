import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { ProjectsPageContent } from '@/presentation/feature/projects/ProjectsPageContent'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

const uiState = {
  selectedNavButton: NavBarProvider.projects,
  videoDiary: { imageUrl: '/video-diary.png', href: '/blog/video-diary' },
}

test('shows every project', () => {
  renderWithChakra(<ProjectsPageContent uiState={uiState} />)

  expect(screen.getByText('Brailliac')).toBeDefined()
  expect(screen.getByText('Video Diary')).toBeDefined()
  expect(screen.getByText('Personal Website')).toBeDefined()
})

test('Video Diary links to the blog post it is given, inside the site', () => {
  renderWithChakra(<ProjectsPageContent uiState={uiState} />)

  const link = screen.getByText('blog post').closest('a')
  expect(link?.getAttribute('href')).toBe('/blog/video-diary')
  expect(link?.getAttribute('target')).toBeNull()
})

test('the links to other sites open in a new tab', () => {
  renderWithChakra(<ProjectsPageContent uiState={uiState} />)

  const external = screen
    .getAllByRole('link')
    .filter((it) => it.getAttribute('href')?.startsWith('http'))
  expect(external.length).toBeGreaterThan(0)
  for (const link of external) {
    expect(link.getAttribute('target')).toBe('_blank')
    expect(link.getAttribute('rel')).toBe('noopener noreferrer')
  }
})
