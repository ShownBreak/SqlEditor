<!--
 * @Author: 张飞青
 * @Description: 
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 16:19:18
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
-->
<template>
  <el-row class="tac">
  <el-col :span="24">
    <h5 style="text-align: center">SQL 编辑器</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#fff"
      text-color="#001529"
      active-text-color="blue">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-coin"></i>
          <span>数据库-pzjc</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1"><i class="el-icon-tickets"></i>abnormal_feedback</el-menu-item>
          <el-menu-item index="1-2"><i class="el-icon-tickets"></i>dispatch_rule</el-menu-item>
          <el-menu-item index="1-3"><i class="el-icon-tickets"></i>file</el-menu-item>
          <el-menu-item index="1-4"><i class="el-icon-tickets"></i>house_wait_rule</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
</el-row>
</template>

<script>
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
</script>