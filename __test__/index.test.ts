import { circle_perimeter } from '../src/index'

// Circle Perimeter
describe('Circle Perimeter', () => {
  test('The radius is 4', () => {
    expect(circle_perimeter(4)).toBe(25.132741228718345)
  })
})
