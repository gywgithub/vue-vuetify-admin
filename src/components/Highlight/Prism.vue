<template>
  <div>
    <h1>Vue Prism Editor</h1>
    <pre>{{code}}</pre>
    <input type="checkbox" v-model="lineNumbers" /> Linenumbers
    <prism-editor class="my-editor height-300" v-model="code" :highlight="highlighter" :line-numbers="lineNumbers"></prism-editor>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'

@Component({
  components: {
    PrismEditor
  }
})
export default class ComponentTemplate extends Vue {
  private lineNumbers: boolean = true
  private code: string = 'console.log("Hello World")'

  private highlighter(code: string) {
    return highlight(code, languages.js)
  }
}
</script>
<style scoped lang="scss">
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

.height-300 {
  height: 300px;
}
</style>
