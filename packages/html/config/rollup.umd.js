import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import {banner} from "./banner"
import {SRC, DIST_MODULE_UMD, PACKAGE_NAME} from "./const"

export default {
    input: `${SRC}/index.js`,
    output: {
        file: `${DIST_MODULE_UMD}/index.js`,
        format: 'umd',
        name: PACKAGE_NAME,
        sourcemap: false,
        banner: banner,
        exports: 'named',
    },
    plugins: [
        babel({ runtimeHelpers: true }),
        resolve(),
        commonjs()
    ],
};