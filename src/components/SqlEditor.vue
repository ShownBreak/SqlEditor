<template>
  <div class="editor">
    <div class="editor__run">
      <el-button type="primary" class="btn">执行</el-button>
      <el-button type="success" class="btn"  @click="autoFormatSelection">格式化</el-button>
    </div>
    <textarea ref="textarea" v-model="code" ></textarea>
    <el-menu default-active="1" class="el-menu-demo"  mode="horizontal">
      <el-menu-item index="1">问题</el-menu-item>
      <el-menu-item index="2">输出</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import _CodeMirror from 'codemirror'
import '@/plugins/sql';
import { Options } from '@/plugins/code-mirror-option';
import sqlFormatter from "sql-formatter";

import { Parser } from 'node-sql-parser';
window.sqlLint = new Parser();

import '../plugins/sql-lint';


// 设置编辑器的最小高度
const MIN_HEIGHT = 450
export default {
  name: 'CodeMirrorEditor',
  data() {
    return {
      codemirror: null,
      code: "",
      cmOptions: Options,
    }
  },
  watch: {
    code() {
      // this.sqlLintCheck(this.code)
    }
  },
  mounted() {
    this.codemirror = _CodeMirror.fromTextArea(this.$refs.textarea, this.cmOptions)

    this.codemirror.on("keypress", (instence) => {
      instence.showHint()
    });

    this.codemirror.on("change", () => {
      this.code = this.codemirror.getValue();
    });
    this.$nextTick(() => {
      this.codemirror.setValue(this.code)
      this.codemirror.setSize('height', MIN_HEIGHT)
    })
  },
  methods: {
    autoFormatSelection() {
      let str = sqlFormatter.format(this.codemirror.getValue(), {language: 'sql'});
      this.codemirror.setValue(str);
    },

    sqlLintCheck(text) {
      const sqlLint = window.sqlLint;
      const parse = sqlLint.parse || sqlLint.astify;
      this.codemirror.markClean()
      try { 
        parse(text); 
      } catch (err) {
        let { location } = err;
        // console.log(err);
        // console.log(expected, message, location, name);
        if (location) {
          this.codemirror.getDoc().markText(
            { line: location.start.line - 1, ch:  location.start.offset-1 },
            { line: location.end.line - 1, ch:  location.end.offset-1 },
            { className: 'error' }
          )
        }
      }
    }
  }
}
</script>
<style>
.editor {
  width: 100%;
  position: relative;
}
.tag {
  margin-right: 12px;
  height: 20px;
  display: flex;
  line-height: 20px;
  padding: 0 16px;
}
.btn {
  height: 30px;
  color: #fff;
  font-size: 13px;
  padding: 0 20px;
}
.editor__run {
  border: 2px solid #eee;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: rgb(242, 240, 248);
}
.CodeMirror {
 height: 600px; 
 font: 14px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace; 
}

.error {
  width: 100%;
  height: 100%;
  border-bottom: 3px dotted rgb(248, 50, 50);
}

.el-menu-demo {
  height: 40px;
}
.el-menu--horizontal>.el-menu-item {
  height: 40px;
  line-height: 40px;
}
</style>
