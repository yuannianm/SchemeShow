<template>
	<div>
		<el-upload
		  class="upload-demo"
		  action="#"
		  accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
		  :on-preview="handlePreview"
		  :on-remove="handleRemove"
		  :before-remove="beforeRemove"
		  multiple
		  :limit="3"
		  :on-exceed="handleExceed"
		  :http-request="handleUpload"
		  :file-list="fileList">
		  <el-button size="small" type="primary">点击上传Excel方案</el-button>
		  <div slot="tip" class="el-upload__tip">只能上传xls/xlsx文件</div>
		</el-upload>
		{{Uploadmessage}}
	</div>
</template>

<script>
	import XLSX from 'xlsx'
	export default {
		data(){
			let	Uploadmessage=""
			return {
				Uploadmessage
				}
		},
		methods: {
			handleUpload(param) {
				var reader = new FileReader();
				reader.onload = (e)=> {
					var data = new Uint8Array(e.target.result);
					var workbook = XLSX.read(data, {
						type: 'array'
					});
					var first_sheet_name = workbook.SheetNames[0];
					var worksheet = workbook.Sheets[first_sheet_name];
					let sheme={"schemeName":param.file.name.split('.xls')[0]};					
					sheme.body=XLSX.utils.sheet_to_json(worksheet,{header:1});
					let reqUrl='http://122.9.97.197:8080'
					this.post(reqUrl+'/api/sendscheme',sheme).then(resp=>{
						if(resp.toString()=="true"){
							this.$store.commit('changeUpload');
							this.Uploadmessage="上传成功";
						}else{
							this.Uploadmessage="上传失败";
							console.log(resp)
						}
					  }).catch((resp)=>{
					  console.log(resp)
					});
				}
				reader.readAsArrayBuffer(param.file)
			}
		}
	}
</script>
