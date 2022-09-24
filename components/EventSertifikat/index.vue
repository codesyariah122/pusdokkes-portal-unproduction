<template>
	<div>
		<b-row align-h="end" class="row__form-filter">
			<b-col cols="4" class="form__filter-caption">
				Filter
			</b-col>
			<b-col cols="5" class="form__filter-profile-tabs">
				<form @submit.prevent="FilterEventChild">			
					<b-row class="d-flex justify-content-center">
						<b-col cols="4" xs="12" sm="12" lg="12" class="select__1">
							<select selected :value="undefined" @change="ChangeCategoryChild($event)">
								<option value="">Jenis Pelatihan</option>
								<option v-for="(item, index) in categories" :value="item.code">
									{{item.value}}
								</option>
							</select>
						</b-col>

						<b-col cols="4" xs="12" sm="12" lg="12" class="select__2">
							<select selected :value="undefined" @change="ChangeMonthChild($event)">
								<option value="">Bulan Pelatihan</option>
								<option v-for="(month, index) in $moment.months()" :value="index + 1">
									{{month}}
								</option>
							</select>
						</b-col>
						<b-col cols="4" xs="12" sm="12" lg="12">
							<mdb-btn size="sm" type="submit">
								<div v-if="loading">
									<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
									Loading...
								</div>
								<div v-else>
									<mdb-icon icon="filter" size="lg"/> Terapkan Filter		
								</div>
							</mdb-btn>
						</b-col>
					</b-row>
				</form>
			</b-col>
		</b-row>
	</div>
</template>

<script>
	export default{
		props: ['categories', 'loading', 'FilterEventChild']
	}
</script>