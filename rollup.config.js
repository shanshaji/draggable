import {terser} from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';

const config = {
    input: 'lib/index.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'index',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        terser()
    ],
}
export default config;