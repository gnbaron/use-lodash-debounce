import { renderHook } from '@testing-library/react-hooks'
import { useDebounce, useDebouncedCallback } from './use-debounce'

const DELAY = 1000

test('debounce a simple value', async () => {
  const { result, rerender, waitForNextUpdate } = renderHook(
    ({ value }) => useDebounce(value, DELAY),
    { initialProps: { value: null } }
  )
  expect(result.current).toEqual(null)
  rerender({ value: 1 })
  rerender({ value: 2 })
  rerender({ value: 3 })
  expect(result.current).toEqual(null)
  await waitForNextUpdate()
  rerender({ value: 4 })
  expect(result.current).toEqual(3)
  await waitForNextUpdate()
  expect(result.current).toEqual(4)
})

test('debounce a callback', done => {
  const callback = jest.fn()
  const { result } = renderHook(() => useDebouncedCallback(callback, DELAY))
  result.current()
  expect(callback).not.toHaveBeenCalled()
  // jest fake timers didn't work here (https://github.com/facebook/jest/issues/3465)
  // lolex timers might fix it on jest 25 (https://github.com/facebook/jest/pull/7776)
  setTimeout(() => {
    expect(callback).toHaveBeenCalled()
    done()
  }, DELAY)
})

test('cancel a debounced callback', done => {
  const callback = jest.fn()
  const { result } = renderHook(() => useDebouncedCallback(callback, DELAY))
  result.current()
  expect(callback).not.toHaveBeenCalled()
  result.current.cancel()
  setTimeout(() => {
    expect(callback).not.toHaveBeenCalled()
    done()
  }, DELAY)
})

test('flush a debounced callback', () => {
  const callback = jest.fn()
  const { result } = renderHook(() => useDebouncedCallback(callback, DELAY))
  result.current()
  expect(callback).not.toHaveBeenCalled()
  result.current.flush()
  expect(callback).toHaveBeenCalled()
})
