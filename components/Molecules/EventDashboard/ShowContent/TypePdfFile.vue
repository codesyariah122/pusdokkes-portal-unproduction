<template>
	<div>
		<header class="docs-header">
			<section class="docs-intro">
				<h5 class="type__name">{{ type_name }}</h5>
				<h2>{{ detailed_data.title }}</h2>
			</section>
		</header>
		<section class="docs-section mt-2" id="item-1-1">
			<mdb-alert
			v-if="
			detailed.file_pdf == 'https://api.ppkc-online.com/file-pelatihan/null'
			"
			color="danger"
			>
			Not found!
		</mdb-alert>
		<div v-else class="">
			<div v-if="loading">
				<center>
					<div class="d-flex justify-content-center">
						<b-col lg="12" xs="12" sm="12" cols="12">
							<b-spinner class="text-info" style="width: 6rem; height: 6rem;" label="Large Spinner" type="grow"></b-spinner>
							<br> 
							<blockquote>Loading ..</blockquote>
						</b-col>
					</div>
				</center>
			</div>
			<pdf v-else
			:src="pdfdata"
			v-for="i in numPages"
			:key="i"
			:id="i"
			:page="i"
			:scale.sync="scale"
			style="width: 100%; margin: 20px auto"
			:annotation="false"
			:text="true"
			:resize="true"
			@link-clicked="handle_pdf_link"
			>
		</pdf>
	</div>
</section>
</div>
</template>

<script>
	import pdf from "pdfvuer";

	export default {
		props: ['detailed', 'detailed_data', 'type_name', 'pdfdata', 'numPages', 'loading'],
		components: {
			pdf,
		},
		data(){
			return {
				page: 1,
				errors: [],
				scale: "page-width"
			}
		},

		methods: {
			handle_pdf_link: function (params) {
				var page = document.getElementById(String(params.pageNumber));
				page.scrollIntoView();
			},

			findPos(obj) {
				if (obj) return obj.offsetTop;
				else return null;
			},
		}
	}
</script>