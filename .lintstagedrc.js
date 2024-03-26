/*
 * @Author: holden.wen
 * @Date: 2024-03-26 21:44:46
 * @LastEditTime: 2024-03-27 00:35:26
 * @LastEditors: holden.wen
 * @Description: file content
 * @FilePath: /thinking-in-projects/.lintstagedrc.js
 */

module.exports = {
  "**/*.{ts,tsx}": [
    "eslint --fix",
    "prettier --write",
  ],
};
