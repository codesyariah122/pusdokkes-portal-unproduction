<!-- Component base on directory /components/ppkc -->
<template>
	<div>
		<ppkcStrukturOrganisasi :path="path" :lists="lists"/>
	</div>
</template>

<script>
	export default{
		name: 'ppkc-struktur_organisasi',
		layout: 'default',

		data(){
			return{
				path: this.$route.name
			}
		},

		async asyncData({$axios}){
			const lists = await $axios.$get('/web/struktur-organisasi')
			
			return {
				lists
			}
		}
	}
</script>