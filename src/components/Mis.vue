<template>
	<div>
		<el-upload class="upload-mis" drag action="#" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"  :http-request="handleUpload">
			<i class="el-icon-upload"></i>
			<div class="el-upload__text">将文件拖到此处,或<em>点击上传</em></div>
			<div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件</div>
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
					let reqUrl="http://localhost:8080";
					this.post(reqUrl+"/api/sendscheme",sheme).then(resp=>{
					 this.Uploadmessage="upload "+resp;
					  }).catch((resp)=>{
					  this.Uploadmessage="upload "+resp;
					});
				}
				reader.readAsArrayBuffer(param.file)
			}
		}
	}
</script>
