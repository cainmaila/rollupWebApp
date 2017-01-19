import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
export default {
    entry: 'src/main.js',
    dest: 'dist/js/main.js',
    format: 'iife',
    plugins: [
        nodeResolve({ jsnext: true }),
        commonjs({
            extensions: ['.js'],
            sourceMap: false
        }),
        babel({
            exclude: 'node_modules/**',
        }),
    ]
}
