import { expect, test } from 'vitest'
import { SocialTileDataProvider } from '@/domain/provider/SocialTileDataProvider'
import { getAbsoluteSocialUrl } from '@/domain/model/SocialTileData'

test('the address of a tile is its scheme and its url', () => {
  const github = SocialTileDataProvider.tiles[0]
  expect(getAbsoluteSocialUrl(github)).toBe('https://github.com/LukeNeedham')
})

test('every tile opens an https address', () => {
  for (const tile of SocialTileDataProvider.tiles) {
    expect(getAbsoluteSocialUrl(tile)).toMatch(/^https:\/\/\S+$/)
  }
})
