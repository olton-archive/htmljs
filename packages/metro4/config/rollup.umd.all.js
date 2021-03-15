import babel from 'rollup-plugin-babel'
import glob from 'glob'
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import {SRC, DIST_MODULE_UMD} from "./const"

function modulesPaths() {
    return glob.sync(SRC + '/*/*.js', {
        ignore: [
            SRC + '/browser.js',
            SRC + '/index.js',
        ],
    });
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
