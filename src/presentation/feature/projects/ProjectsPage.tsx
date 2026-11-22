import { BlogArticleProvider } from '@/domain/provider/BlogArticleProvider'
import { NavBarProvider } from '@/domain/provider/NavBarProvider'
import { UrlProvider } from '@/domain/provider/UrlProvider'
import { ProjectsPageContent } from '@/presentation/feature/projects/ProjectsPageContent'
import type { ProjectsUiState } from '@/presentation/feature/projects/ProjectsUiState'

/** Connects the projects page to the app: it reads what the page links to from the providers. No state, so no view model. */
export function ProjectsPage() {
  const blogArticle = BlogArticleProvider.articlesMap.videoDiary
  const uiState: ProjectsUiState = {
    selectedNavButton: NavBarProvider.projects,
    videoDiary: {
      imageUrl: blogArticle.image,
      href: UrlProvider.blogArticle(blogArticle.id),
    },
  }
  return <ProjectsPageContent uiState={uiState} />
}
