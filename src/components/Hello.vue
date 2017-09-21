<template>
  <div class="upload">
    <el-upload class="upload-demo" :action="uploadUrl":on-success="uploadSuccess" :file-list="fileList2" list-type="picture">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
export default {
  data () {
    return {
      uploadUrl: '/api/upload',
      fileList2: []
    }
  },
  methods: {
    uploadSuccess (response, file) {
      console.log(response)
    }
  }
}
</script>
<style lang="scss">
$width:500px;
  .upload{
    width: $width;
  }
</style>
