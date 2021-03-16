import babel from 'rollup-plugin-babel'
import glob from 'glob'
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import {SRC, DIST_MODULE_UMD} from "./const"

function modulesPaths() {
    const components = glob.sync(SRC + '/components/*.js')

    return components
}

export default {
    input: modulesPaths(),
    output: {
        exports: "auto",
        dir: DIST_MODULE_UMD,
        format: 'cjs',
        chunkFileNames: 'parts/[name].js',
    },
    plugins: [babel(),
        resolve(),
        commonjs()
    ],
};
