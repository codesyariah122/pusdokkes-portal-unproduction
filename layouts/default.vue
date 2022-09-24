<template>
	<div>
		<LayoutsNavigation :token="token" :profiles="profiles" :slug="slug" :event_path="event_path"/>
		<Nuxt/>

		<LayoutsNewFooter/>

		<GlobalsToTop/>
	</div>
</template>

<script>
	export default {

		data(){
			return{
				profiles: {},
				slug: '',
				event_path: this.$route.path
			}
		},
		
		beforeMount(){
			this.ConfigApiUrl(),
			this.CheckToken()
		},

		mounted(){
			this.UserProfileData()
		},

		methods: {
			
			CheckToken(){
				this.$store.dispatch('config/checkAuthLogin', 'token')
			},
			ConfigApiUrl(){
				const api_url = process.env.NUXT_ENV_API_URL
				this.$store.dispatch('config/storeConfigApiUrl', api_url)
			},
			UserProfileData(){
				if(this.token.accessToken){					
					const url = `${this.api_url}/web/user`
					this.$axios.defaults.headers.common.Authorization = `Bearer ${this.token.accessToken}`
					this.$axios.get(url)
					.then(({data}) => {
						this.profiles = data.user
						this.slug = data.user.nama
					})
					.catch(err => console.log(err.response ? err.response : ''))
				}else{
					console.log("No-Login")
				}
			},

			WidgetChat(){
				let url = 'https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?82740';
				let s = document.createElement('script');
				s.type = 'text/javascript';
				s.async = true;
				s.src = url;
				let cta_text = this.$device.isDesktop ? 'Admin PPKC Carolus' : ''
				let options = {
					"enabled":true,
					"chatButtonSetting":{
						"backgroundColor":"#004899",
						"ctaText":'',
						"borderRadius":"25",
						"marginLeft":"20",
						"marginBottom":"20",
						"marginRight":"50",
						"position":"left"
					},
					"brandSetting":{
						"brandName":"PPKC Carolus",
						"brandSubTitle":"Pusat Pelatihan Kesehatan Carolus",
						"brandImg": require('~/assets/images/profile/call-center.jpg'),
						"welcomeText":"Halo, new member\nada yang bisa kami bantu ?\ncukup kirimkan pesan kepada kami sekarang untuk mendapatkan info lebih lanjut tentang pelatihan tenaga kesehatan PPKC Carolus.",
						"messageText":"Halo, Admin PPKC ! kami butuh bantuan untuk mengikuti pelatihan PPKC Carolus  {{page_link}}",
						"backgroundColor":"#004899",
						"ctaText":"Start Chat",
						"borderRadius":"25",
						"autoShow":false,
						"phoneNumber":"628164851356"
					}
				};
				s.onload = function() {
					CreateWhatsappChatWidget(options);
				};
				let x = document.getElementsByTagName('script')[0];
				x.parentNode.insertBefore(s, x);
			}
		},

		computed: {
			token(){
				return this.$store.getters['config/ConfigCheckLogin']
			},
			api_url(){
				return this.$store.getters['config/ConfigApiUrl']
			}
		}
	}
</script>
