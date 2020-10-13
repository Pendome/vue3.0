// // 用 vite 创建项目，配置 postcss 需要使用 post.config.js，之前使用的 .postcssrc.js 已经被抛弃
// // 具体配置可以去 postcss-pxtorem 仓库看看文档
const fs = require('fs');
module.exports = () => {
  // const designWidth = file.dirname.includes(path.join('node_modules', 'vant')) ? 375 : 360;
  let fildList = []
  fs.readdirSync('node_modules').forEach(file => {
    fildList.push(file)
  })
  const designWidth = fildList.includes('vant') ? 375 : 750
  return {
    plugins: {
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false,
        replace: true
      }
    }
  }
}


