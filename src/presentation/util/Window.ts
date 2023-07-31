export function openInCurrentTab(url: string) {
  window.open(url, '_self')
}

export function openInNewTab(url: string) {
  window.open(url, '_blank')
}