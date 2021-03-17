import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"
import {terser} from "rollup-plugin-terser"
import {banner} from "./banner"
import {SRC, DIST_LIB} from "./const"

export default {
    input: `${SRC}/browser.js`,
    output: {
        file: `${DIST_LIB}/metro4-htmljs.min.js`,
        format: 'iife',
        name: "",
        sourcemap: false,
        banner: banner,
        exports: 'named',
        globals: {
            '@htmljs/html': 'html'
        }
    },
    plugins: [
        babel(),
        resolve(),
        commonjs(),
        excludeDependenciesFromBundle(),
        terser({
            output: {
                comments: "all",
            },
        })
    ],
};