<!--
 * @Author: 张飞青
 * @LastEditors: zhangfeiqing
 * @LastEditTime: 2022-10-23 16:33:53
 * Copyright (c) 2022 by ziroom, All Rights Reserved. 
-->
<template>
  <div class="header-menu">
    <el-tag
      v-for="(tag, index) in dynamicTags"
      :key="tag"
      closable
      :type="currentTag !== index ? 'info' : ''"
      @click="currentTag = index"
      @close="handleClose(tag)">
      {{tag}}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible"
      v-model="inputValue"
      ref="saveTagInput"
      size="small"
      @keyup.enter.native="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput"><i class="el-icon-plus"></i> 新建</el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['工作台'],
        inputVisible: false,
        inputValue: '',
        currentTag: 0,
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },

      showInput() {
        this.inputVisible = true;
        this.$nextTick(() => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },

      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
    }
  }
</script>
<style>
  .header-menu {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
    cursor: pointer;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>