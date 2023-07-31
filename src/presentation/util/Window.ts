export function openInCurrentTab(url: string) {
  window.open(url, '_self')
}

/**
 * Opens url in a new tab, while circumnavigating a security hole:
 * https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/
 */
export function openInNewTab(url: string) {
    const newWindow = window.open(url, '_blank', 'noopener noreferrer')
    if (newWindow) newWindow.opener = null
}