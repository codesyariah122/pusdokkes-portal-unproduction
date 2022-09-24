<template>
	<div>
		<a href="#!" @click="scrollTop" v-show="visible" class="scroll-top btn-hover">
			<mdb-icon icon="chevron-up" />
		</a>
	</div>
</template>

<script>
	export default{
		data () {
			return {
				visible: false,
				intervalId: null
			}
		},

		methods: {
			scrollTop() {
				this.intervalId = setInterval(() => {
					if (window.pageYOffset === 0) {
						clearInterval(this.intervalId)
					}
					window.scroll(0, window.pageYOffset - 50)
				}, 20)
			},
			scrollListener(e) {
				this.visible = window.scrollY > 150
			}
		},
		mounted() {
			window.addEventListener('scroll', this.scrollListener)
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.scrollListener)
		}
	}
</script>