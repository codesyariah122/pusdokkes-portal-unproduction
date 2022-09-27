<!-- Component base on directory /components/ppkc -->
<template>
	<div>
		<pusdokkesSejarah :path="path"/>
	</div>
</template>

<script>
	export default{
		name: 'pusdokkes-testimoni',
		layout: 'default',

		data(){
			return{
				path: this.$route.name
			}
		}
		
	}
</script>