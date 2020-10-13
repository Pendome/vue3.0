const fs = require('fs')
const dotenv = require('dotenv')

// const envFiles = [
//   /** default file */ `.env`,
//   /** mode file */ `.env.${process.env.NODE_ENV}`
// ]
// for (const file of envFiles) {
//   const envConfig = dotenv.parse(fs.readFileSync(file))
//   for (const k in envConfig) {
//     process.env[k] = envConfig[k]
//   }
// }
module.exports = {
  hostname: 'localhost',

  port: 9000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  base: '/',
  outDir: 'dist',
  // 反向代理
  proxy: {
    proxy: {
      '/api': {
        target: 'http://172.17.1.75:85/',
        changeOrigin: true,
      }
    }
  },
  alias: {
    alias: {
      vue$: 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
      '@s': path.resolve(__dirname, 'src/components'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@views': path.resolve(__dirname, 'src/views'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@Validate': path.resolve(__dirname, 'src/assets/js/validate'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@api': path.resolve(__dirname, 'src/services/api')
    }
  },
}