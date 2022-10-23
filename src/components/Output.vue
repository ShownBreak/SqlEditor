<!--
 * @Author: 张飞青
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 19:05:29
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
-->
<template>
  <div>
    <el-table
      v-if="+index === 2"
      :data="tableData"
      style="width: 100%"
      height="300"
    >
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
    </el-table>
    <el-collapse v-else>
      <el-collapse-item v-for="(item, index) in errorList" :key="index" :title="getTitle(item)" :name="index">
        <template slot="title">
          <i class="header-icon el-icon-error" style="color: red;padding-right: 5px;"></i>
          <span style="color: #999; padding-right: 10px">{{item.now}}</span>
          {{getTitle(item)}}
        </template>
        <div style="padding-left: 20px">{{ item.message }}</div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  export default {
    props: {
      index: {
        default: '1',
      },

      errorList: {
        default: () => []
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    watch:{
      errorList: {
        handler: (val) => {
          console.log(val)
        }
      }
    },
    mounted() {
      console.log('========>',this.errorList);
    },
    methods: {
      getTitle(item) {
        let text = item.message;
        if (text.length < 100) return text;
        return text.slice(0, 100) + '...'
      }
    }
  }
</script>