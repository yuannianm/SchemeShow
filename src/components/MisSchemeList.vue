<template>
	<div>
		<h1>MisSchemeList</h1>
		<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
	</div>
</template>
<script>
  export default {
    data() {
		let reqUrl="http://localhost:8080";
		let data=[];
		this.get(reqUrl+"/api/getscheme").then(resp=>{
			resp[0].children=[{"label":"label2"}]
					 this.data=resp
					  }).catch((resp)=>{
					  console.log(resp)
					});
					
					
      return {
        data
		}
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    }
  };
</script>

<style>
</style>
