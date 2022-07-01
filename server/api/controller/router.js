/*
 * @Author: zengxinfu karlge_bear@163.com
 * @Date: 2022-07-01 14:53:49
 * @LastEditors: zengxinfu karlge_bear@163.com
 * @LastEditTime: 2022-07-01 15:08:28
 * @FilePath: \export-cars\server\api\controller\router.js
 */

var indexshowController = require('./home') // 主页

var loginController = require('./login') // 登录


exports.indexShow = indexshowController.indexShow // 首页展示
exports.longin = loginController.longin // 登录