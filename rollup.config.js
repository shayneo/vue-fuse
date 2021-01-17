import vue from 'rollup-plugin-vue'

export default {
  input: 'src/components/VueFuse.vue',
  output: {
    format: 'esm',
    file: 'dist/VueFuse.js',
  },
  plugins: [
    vue(),
  ],
}
