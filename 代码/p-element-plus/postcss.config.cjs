/**
 * @desc:postcss需要的插件
 */

/* eslint-env node */
module.exports = {
  // 导出需要的插件
  plugins: [
    require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-each')({
      plugins: {
        // postcss-each提供的方法 
        // 防止代码生成颜色时报错：无法解析color
        beforeEach: [
          require('postcss-for'),
          require('postcss-color-mix')
        ]
      }
    }),
  ]
}