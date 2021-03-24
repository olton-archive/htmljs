import babel from 'rollup-plugin-babel'
import glob from 'glob'
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import {SRC, DIST_MODULE_UMD} from "./const"

function modulesPaths() {
    const standard = glob.sync(SRC + '/elements/standard/*.js')
    const extended = glob.sync(SRC + '/elements/extended/*.js')

    return standard.concat(extended)
}

export default {
    input: modulesPaths(),
    output: {
        exports: "auto",
        dir: DIST_MODULE_UMD,
        format: 'cjs',
        chunkFileNames: 'parts/[name].js',
    },
    plugins: [
        babel({ runtimeHelpers: true }),
        resolve(),
        commonjs()
    ],
};
