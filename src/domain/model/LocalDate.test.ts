import { expect, test } from 'vitest'
import { LocalDate } from '@/domain/model/LocalDate'

test('is written as day, month and year, with no padding', () => {
  expect(new LocalDate(7, 11, 2026).format()).toBe('7/11/2026')
  expect(new LocalDate(23, 4, 2024).format()).toBe('23/4/2024')
})
