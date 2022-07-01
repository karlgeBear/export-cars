/*
 * @Author: zengxinfu karlge_bear@163.com
 * @Date: 2022-07-01 14:53:49
 * @LastEditors: zengxinfu karlge_bear@163.com
 * @LastEditTime: 2022-07-01 15:08:12
 * @FilePath: \export-cars\server\api\controller\home\index.js
 */

// const db = require('../../model/db.js')
// const sql = require('../../model/sql.js')

/**
 *  index show
 */
exports.indexShow = (req, res, next) => {
  res.json({
    allparentinfo: [
      {
        headinfo: {
          before: "更多课程",
          after: "中小学",
          imgurl: "img/icon_middle.png",
        },
        course: {
          classList: [
            { classname: "精品钢琴课", imgurl: "img/cls_mid1.jpg" },
            { classname: "精品数学课", imgurl: "img/cls_mid2.jpg" },
          ],
          classMoreList: [
            { classname: "高中语文", imgurl: "img/cls_icon_chaness.png" },
            { classname: "小学英语", imgurl: "img/cls_icon_english.png" },
            { classname: "初中物理", imgurl: "img/cls_icon_wuli.png" },
            { classname: "高中数学", imgurl: "img/cls_icon_math.png" },
          ],
        },
      },
      {
        headinfo: {
          before: "更多课程",
          after: "艺术/体育",
          imgurl: "img/icon_art.png",
        },
        course: {
          classList: [
            { classname: "精品语文课", imgurl: "img/cls_mid3.jpg" },
            { classname: "精品生物课", imgurl: "img/cls_mid4.jpg" },
          ],
          classMoreList: [
            { classname: "钢琴", imgurl: "img/cls_icon_gangqin.png" },
            { classname: "古筝", imgurl: "img/cls_icon_guzheng.png" },
            { classname: "吉他", imgurl: "img/cls_icon_jita.png" },
            { classname: "小提琴", imgurl: "img/cls_icon_tiqin.png" },
          ],
        },
      },
      {
        headinfo: {
          before: "更多课程",
          after: "语言/留学",
          imgurl: "img/icon_liuxue.png",
        },
        course: {
          classList: [
            { classname: "精品体育课", imgurl: "img/cls_mid5.jpg" },
            { classname: "精品麻将课", imgurl: "img/cls_mid6.jpg" },
          ],
          classMoreList: [
            { classname: "葡萄牙语", imgurl: "img/cls_icon_putao.png" },
            { classname: "外教口语", imgurl: "img/cls_icon_waijiao.png" },
            { classname: "新概念英语", imgurl: "img/cls_icon_xingainian.png" },
            { classname: "剑桥英语", imgurl: "img/cls_icon_jianqiao.png" },
          ],
        },
      },
      {
        headinfo: {
          before: "更多课程",
          after: "拓展训练",
          imgurl: "img/icon_tuozhan.png",
        },
        course: {
          classList: [
            { classname: "精品出游课", imgurl: "img/cls_mid7.jpg" },
            { classname: "精品玩耍课", imgurl: "img/cls_mid8.jpg" },
          ],
          classMoreList: [
            { classname: "冬夏令营", imgurl: "img/cls_icon_dongxia.png" },
            { classname: "亲子出游", imgurl: "img/cls_icon_qinzi.png" },
            { classname: "儿童乐园", imgurl: "img/cls_icon_ertong.png" },
            { classname: "拓展培训", imgurl: "img/cls_icon_tuozhanpei.png" },
          ],
        },
      },
    ],
    indexClass: [
      {
        showClassImg: "img/class_art_icon.png",
        showClassName: "艺术",
        classPid: "15963587",
      },
      {
        showClassImg: "img/class_tiyu_icon.png",
        showClassName: "体育",
        classPid: "15963588",
      },
      {
        showClassImg: "img/class_yuyan_icon.png",
        showClassName: "语言",
        classPid: "15963589",
      },
      {
        showClassImg: "img/class_liuxue_icon.png",
        showClassName: "留学",
        classPid: "15963590",
      },
      {
        showClassImg: "img/class_xiao_icon.png",
        showClassName: "小学",
        classPid: "15963591",
      },
      {
        showClassImg: "img/class_sheng_icon.png",
        showClassName: "小升初",
        classPid: "15963592",
      },
      {
        showClassImg: "img/class_chuzhong_icon.png",
        showClassName: "初中",
        classPid: "15963593",
      },
      {
        showClassImg: "img/class_zhongkao_icon.png",
        showClassName: "中考",
        classPid: "15963594",
      },
      {
        showClassImg: "img/class_gao_icon.png",
        showClassName: "高中",
        classPid: "15963595",
      },
      {
        showClassImg: "img/class_sheng_icon.png",
        showClassName: "更多",
        classPid: "all",
      },
    ],
  });
};
