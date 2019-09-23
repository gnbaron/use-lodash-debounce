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

Notice that `react` and `lodash.debounce` are defined as peer dependencies in order to get a smaller bundle size. This means they should be installed in your project.

## Usage

Debounce values throughout re-renders with `useDebounce`. The debounce will be triggered everytime the value changes (compared using strict equality).

```js
import { useDebounce } from 'use-lodash-debounce'

const [value, setValue] = useState()
const debouncedValue = useDebounce(value, 800)
```

Create debounced callbacks with `useDebouncedCallback`.

```js
import { useDebouncedCallback } from 'use-lodash-debounce'

const [value, setValue] = useState()
const debouncedSetValue = useDebouncedCallback(setValue, 800)
```

## Example

```js
import { useDebounce } from 'use-lodash-debounce'

function SearchInput() {
  const [value, setValue] = useState();
  const debouncedValue = useDebounce(value, 1000);

  useEffect(() => {
    // do search stuff
  }, [debouncedValue]);

  return (
    <input
      placeholder="Type to search"
      onChange={e => setValue(e.target.value)}
    />
  );
}
```

## Debounce Options

Lodash debounce supports a set of additional options which can be provided through a third parameter for `useDebounce` and `useDebouncedCallback`.

```js
const options = { leading: true, maxWait: 1600, trailing: false }
const debouncedSetValue = useDebouncedCallback(setValue, 800, options)
```

See [lodash debounce docs](https://lodash.com/docs/4.17.15#debounce) for details.

## Cancel / Flush

The callback returned by `useDebouncedCallback` has a method `cancel` to cancel delayed function invocations and a `flush` method to immediately invoke them.

## Alternatives

If you're looking for a debounce hook that don't use lodash internally, check out [use-debounce](https://github.com/xnimorz/use-debounce).

## License

**[MIT](LICENSE)**
