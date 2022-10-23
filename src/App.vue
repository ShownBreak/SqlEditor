<!--
 * @Author: 张飞青
 * @Description: 
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 16:19:59
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
-->
<template>
  <el-container>
      <el-aside width="250px"><Left /></el-aside>
      <el-container>
        <el-header>
          <Header />
        </el-header>
        <el-main>
          <SqlEditor />
          <Output />
        </el-main>
      </el-container>
    </el-container>
</template>
<script>
import Left from '@/components/Left';
import Header from '@/components/Header';
import Output from './components/Output';
import SqlEditor from '@/components/SqlEditor';

export default {
  name: 'APP',
  components: {
    Left,
    Header,
    Output,
    SqlEditor
  },
}
</script>

<style>
  body, html {
    height: 100%
  }
  .el-container {
    height: 100%
  }
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
    height: 30px !important;
  }
  
  .el-aside {
    background-color: #fff;
    color: #333;
    border-right: 1px solid #eee;
  }
  
  .el-main {
    position: relative;
    padding: 10px 16px 16px;
    /* background: #999; */
  }

  .el-footer {
    position: relative;
  }

  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
 