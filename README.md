# use-lodash-debounce ⏳

Custom [react hooks](https://reactjs.org/docs/hooks-overview.html) for [lodash debounce](https://lodash.com/docs/4.17.15#debounce) that provides an easy way to debounce any value, debounced callbacks and types out of the box.

[![NPM](https://img.shields.io/npm/v/use-lodash-debounce.svg)](https://www.npmjs.com/package/use-lodash-debounce)

## Install

Using yarn or npm:
```bash
yarn add use-lodash-debounce
```
```bash
npm i use-lodash-debounce
```

⚠️ `react@16.8.0` or greater is required due to the usage of hooks.

## Usage

```ts
import { useDebounce } from 'use-lodash-debounce'

const [value, setValue] = useState()
const [debouncedValue] = useDebounce(value, 800)
```

```ts
import { useDebouncedCallback } from 'use-lodash-debounce'

const [value, setValue] = useState()
const debouncedSetValue = useDebouncedCallback(setValue, 800)
```

## Debounce Options

Lodash debounce supports a set of additional options which can be provided through a third parameter for `useDebounce` and `useDebouncedCallback`.

```ts
const options = { leading: true, maxWait: 1600, trailing: false }
const debouncedSetValue = useDebouncedCallback(setValue, 800, options)
```

See [lodash debounce docs](https://lodash.com/docs/4.17.15#debounce) for details.

## License

**[MIT](LICENSE)**
