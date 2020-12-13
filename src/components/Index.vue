<template>
	<div>

		<table>
					
					<tr>
						<td><h1>方案上传</h1></td>
						<td><h1>方案列表</h1></td>
					</tr>
			<tr>
				<td><Mis></Mis></td>
				<td><MisSchemeList></MisSchemeList></td>
			</tr>
		</table>

		
	</div>
</template>

<script>
	import Mis from './Mis.vue'
	import MisSchemeList from './MisSchemeList.vue'
export default {
	components:{
		Mis,
		MisSchemeList
	}
}
</script>

<style>
</style>