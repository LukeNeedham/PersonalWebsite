import { cleanup, screen } from '@testing-library/react'
import { afterEach, expect, test } from 'vitest'
import { BlogArticlePageContent } from '@/presentation/feature/blog/article/BlogArticlePageContent'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { renderWithChakra } from '@/test/renderWithChakra'

afterEach(cleanup)

test('shows the title, the date and the html of the article', () => {
  renderWithChakra(
    <BlogArticlePageContent
      uiState={{
        selectedNavButton: NavBarProvider.blog,
        title: 'A post',
        date: '7/11/2026',
        contentHtml: '<p>Some <strong>bold</strong> words</p>',
      }}
    />,
  )

  expect(screen.getByRole('heading', { name: 'A post' })).toBeDefined()
  expect(screen.getByText('7/11/2026')).toBeDefined()
  expect(screen.getByText('bold').tagName).toBe('STRONG')
})

test('an article that does not exist shows no content', () => {
  const { container } = renderWithChakra(
    <BlogArticlePageContent
      uiState={{ selectedNavButton: NavBarProvider.blog, title: 'Article not found', date: '' }}
    />,
  )

  expect(screen.getByRole('heading', { name: 'Article not found' })).toBeDefined()
  expect(container.querySelector('.blog-article-content')).toBeNull()
})
