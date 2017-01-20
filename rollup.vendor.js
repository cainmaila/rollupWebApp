import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
export default {
    entry: 'src/vendor.js',
    dest: 'dist/js/vendor.js',
    format: 'iife',
    plugins: [
        nodeResolve({ jsnext: true }),
        commonjs({
            extensions: ['.js'],
            sourceMap: false
        }),
    ]
}
