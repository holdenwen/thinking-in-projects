/*
 * @Author: holden.wen
 * @Date: 2024-03-24 17:10:10
 * @LastEditTime: 2024-03-24 21:26:53
 * @LastEditors: holden.wen
 * @Description: file content
 * @FilePath: /thinking-in-projects/lint-staged.config.js
 */

module.exports = {
  // '*.{js,jsx,vue}': 'vue-cli-service lint',
  '*.{js,ts,tsx}': 'pnpm run lint',
};
