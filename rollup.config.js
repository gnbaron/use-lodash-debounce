import url from 'rollup-plugin-url'
import resolve from 'rollup-plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import commonjs from 'rollup-plugin-commonjs'

import pkg from './package.json'

export default {
  input: 'src/use-debounce.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    url(),
    resolve(),
    peerDepsExternal(),
    typescript({ clean: true }),
    commonjs(),
  ],
}
