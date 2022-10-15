<!-- Component base on directory /components/ppkc -->
<template>
	<div>
		<PusdokkesSejarahPusdokkes :path="path"/>
	</div>
</template>

<script>
	export default{
		name: 'pusdokkes-sejarah',
		layout: 'default',

		data(){
			return{
				path: this.$route.name
			}
		}
		
	}
</script>