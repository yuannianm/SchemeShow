<template>
	<div>
		<el-tree :data="data" :props="defaultProps" ></el-tree>
	</div>
</template>
<script>
  export default {
	watch: {
	  	'$store.state.uploadSta':function() {
	  		this.$router.go(0)
	  	}
	  },
    data() {
		let reqUrl="http://122.9.97.197:8080";
		console.log(reqUrl+"123")
		let data=[];
		this.get(reqUrl+'/api/getscheme').then(resp=>{
					 this.data=resp
					  }).catch((resp)=>{
					  console.log(resp)
					});
					
					
      return {
        data
		}
    },
  };
</script>

<style>
</style>
