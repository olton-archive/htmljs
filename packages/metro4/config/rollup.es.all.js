import babel from 'rollup-plugin-babel'
import glob from 'glob'
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle"
import {SRC, DIST_MODULE} from "./const"

function modulesPaths() {
    const components = glob.sync(SRC + '/components/*.js')

    return components
}

export default {
    input: modulesPaths(),
    output: {
        dir: DIST_MODULE,
        format: 'es',
        chunkFileNames: 'parts/[name].js',
    },
    plugins: [babel(),
        resolve(),
        commonjs(),
        excludeDependenciesFromBundle()
    ],
};