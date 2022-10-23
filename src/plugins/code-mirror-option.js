/*
 * @Author: 张飞青
 * @Description: Options
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 17:23:56
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
 */
export const Options = {
  mode: "text/x-sql", //实现Java代码高亮
  addOverlay: 'text/x-mysql',
  autofocus: true,
  line: true,
  lineNumbers: true,
  theme: "dracula",
  keyMap: "sublime",
  extraKeys: {
    'Tab': 'autocomplete',
  },
  lineWrapping: true, //是否换行
  foldGutter: true, //是否折叠
  // 在行槽中添加行号显示器、折叠器、语法检测器`
  gutters: ["CodeMirror-linenumbers","CodeMirror-foldgutter","CodeMirror-lint-markers"],
  matchBrackets:true,// 匹配结束符号，比如"]、}"
  autoCloseBrackets: true , // 自动闭合符号
  styleActiveLine:true, // 显示选中行的样式
  hintOptions: {  
    completeSingle: false,
    tables: {
      abnormal_feedback: ['cbry', 'like', 'follow'],
      dispatch_rule: ['uu', 'aa', 'cc'],
      file: ['alibaba','uu','ireader'],
      house_wait_rule: ['ee', 'dd', 'tt']
    }
  },

  smartIndent: true , //智能缩进
  lint: true,
  spellcheck: true,
  autocorrect: true,
}