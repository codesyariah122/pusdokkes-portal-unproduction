<template>
	<div>
		<header class="docs-header">
			<section class="docs-intro">
				<h5 class="type__name">{{ type_name }}</h5>
				<h2>{{ detailed_data.title }}</h2>
			</section>
		</header>
		<section class="docs-section mt-2" id="item-1-1">
			<div v-if="link_yt">
				<center>
					<b-progress
					:max="max"
					height="2rem"
					:striped="true"
					show-progress
					:animated="true"
					class="mb-3"
					>
					<b-progress-bar :value="value" variant="success">
						<h5 v-if="value > 0" class="text-white">Loading</h5>
					</b-progress-bar>
				</b-progress>
				<b-col cols="12" class="mt-3">
					<b-skeleton-img no-aspect height="150px"></b-skeleton-img>
				</b-col>
			</center>
		</div>

		<div v-else>
			<EventpageVideoSection :video="detailed.video" />
		</div>
	</section>
</div>
</template>

<script>
	export default {
		props: ['detailed', 'type_name', 'detailed_data'],

		data() {
			return {
				value: 0,
				max: 600,
			}
		},

		mounted(){
			this.startTimer()
		},

		methods: {
			startTimer() {
				let vm = this;
				let timer = setInterval(function () {
					vm.value += 6;
					if (vm.value >= vm.max) clearInterval(timer);
				}, 100);
				vm.value = 0;
			},
		}
	}
</script>