import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue2';
import uglify from 'rollup-plugin-uglify';
import alias from 'rollup-plugin-alias';
import replace from 'rollup-plugin-replace';
//==============PostCSS plugins=====================
import postcss from 'rollup-plugin-postcss'
import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';
import atImport from 'postcss-import';
//==============PostCSS plugins end=================
export default {
    entry: 'src/main.js',
    dest: 'dist/js/main.js',
    format: 'iife',
    sourceMap: 'inline',
    plugins: [
        alias({
            resolve: ['.js', '.vue'],
            myDiv: './component/myDiv',
        }),
        vue(),
        postcss({
            plugins: [
                atImport({ //css支援import
                    path: ['src/style'],
                }),
                simplevars(), //sass變數語法
                nested(), //套崁語法
                cssnext({ warnForDuplicates: false, }), //支援css next
                cssnano(), //壓縮
            ],
            extensions: ['.css'],
        }),
        nodeResolve({ jsnext: true }),
        commonjs({
            extensions: ['.js'],
            sourceMap: false
        }),
        replace({
            exclude: 'node_modules/**',
            MY_NAME: JSON.stringify('Cain Chu'),
        }),
        babel({
            exclude: 'node_modules/**',
        }),
        uglify(),
    ]
}
