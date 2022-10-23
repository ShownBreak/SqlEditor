<!--
 * @Author: 张飞青
 * @Description: readme
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-21 09:26:20
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
-->
# sql-editor-vue

## web-ui需实现功能:

必要功能：

1.sql语法检测

2.sql语法提示(语法提示、表名、表字段提示)(需注意的点:复杂sql如多层嵌套、别名识别等能提示对应字段和语法检测)

3.sql一键格式化

## 选做功能:

1.多条sql(以分号为单条sql结束标识符)执行,返回多个结果集

2.执行前校验select语句是否走了索引