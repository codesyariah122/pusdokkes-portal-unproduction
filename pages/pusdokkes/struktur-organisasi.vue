<!-- Component base on directory /components/ppkc -->
<template>
	<div>
		<pusdokkesStrukturOrganisasi :path="path" :lists="lists"/>
	</div>
</template>

<script>
	export default{
		name: 'pusdokkes-struktur_organisasi',
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