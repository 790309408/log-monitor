import typescript from 'rollup-plugin-typescript2';
export default {
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    sourcemap: true,
    name:'Plugin'
  },
  plugins: [
    typescript(),
  ]
};