import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"
import {banner} from "./banner"
import {SRC, DIST_MODULE, PACKAGE_NAME} from "./const"

export default {
    input: `${SRC}/index.js`,
    output: {
        file: `${DIST_MODULE}/index.js`,
        format: 'es',
        name: PACKAGE_NAME,
        sourcemap: false,
        banner: banner,
        exports: 'named',
    },
    plugins: [
        babel(),
        resolve(),
        commonjs(),
        excludeDependenciesFromBundle()
    ],
};