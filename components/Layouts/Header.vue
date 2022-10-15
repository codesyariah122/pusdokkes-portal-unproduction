<style lang="scss" scoped>
	.header{
		a:hover{
			color: var(--primary);
		}
		.nav-link {
			color: black;
		}
	}
</style>
<template>
	<header id="header" class="bg-white header header-box-shadow-on-scroll header-abs-top header-bg-transparent header-show-hide"data-hs-header-options='{"fixMoment": 300,"fixEffect": "slide"}'>
		<div id="searchPushTop" class="search-push-top">
			<div class="container position-relative">
				<div class="search-push-top-content pt-3">
					<div class="search-push-top-close-btn">
						<div class="hs-unfold">
							<a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-soft-secondary mt-2 mr-2" href="#" data-hs-unfold-options='{"target": "#searchPushTop","type": "jquery-slide","contentSelector": ".search-push-top"}'>
								<svg width="10" height="10" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
									<path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z" />
								</svg>
							</a>
						</div>
					</div>
					<form class="input-group" action="/berita-polri">
						<input type="search" class="form-control" name="search" placeholder="Search.." aria-label="Search" />
						<div class="input-group-append">
							<button type="submit" class="btn btn-primary"> Search </button>
						</div>
					</form>
				</div>
			</div>
		</div>
		<div class="header-section">
			<div id="logoAndNav" class="container">
				<nav class="js-mega-menu navbar navbar-expand-lg">
					<a class="navbar-brand" href="/" aria-label="Front"><img src="https://polri.go.id/webpolri/assets/img/logos/polri.png" alt="Logo" style="width: 180px" /></a>
					<button type="button" class="navbar-toggler btn btn-icon btn-md rounded-circle" style="background-color: #d6d6d6" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
						<span class="navbar-toggler-default">
							<svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
							</svg>
						</span>
						<span class="navbar-toggler-toggled">
							<svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
								<path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
							</svg>
						</span>
					</button>
					<div id="navBar" class="collapse navbar-collapse">
						<div class="navbar-body header-abs-top-inner">
							<ul class="navbar-nav">
								<li class="hs-has-sub-menu navbar-nav-item"><a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Tentang</a>
									<div id="blogSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 600px">
										<a class="dropdown-item" href="/pesan-kapolri">Pesan Kapolri</a>
										<a class="dropdown-item" href="/arti-lambang">Arti Lambang</a>
										<a class="dropdown-item" href="/sejarah">Sejarah Polri</a>
										<a class="dropdown-item" href="/sejarah-kapolri">Kapolri dari Masa ke Masa</a>
										<a class="dropdown-item" href="/visimisi">Visi dan Misi</a>
										<a class="dropdown-item" href="/struktur-organisasi">Struktur Organisasi</a>
										<a class="dropdown-item" href="/satker-polri">Satuan Kerja</a>
										<a class="dropdown-item" href="/satwil-polri">Satuan Wilayah</a>
										<a class="dropdown-item" href="/mitra-polri">Mitra Polri</a>
									</div>
								</li>

								<li class="hs-has-sub-menu navbar-nav-item"><a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Informasi</a>
									<div id="blogSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 230px">
										<a class="dropdown-item" href="https://humas.polri.go.id/informasi-serta-merta" target="_blank">Infromasi Serta Merta</a>
										<a class="dropdown-item" href="https://humas.polri.go.id/informasi-setiap-saat" target="_blank">Infromasi Setiap Saat</a>
										<a class="dropdown-item" href="https://humas.polri.go.id/berkala" target="_blank">Infromasi Berkala</a>
										<a class="dropdown-item" href="https://humas.polri.go.id/dikecualikan" target="_blank">Infromasi Dikecualikan</a>
										<a class="dropdown-item" href="http://presisi.divkum.polri.go.id/Dokumen.aspx" target="_blank">UU dan Peraturan</a>
										<a class="dropdown-item" href="http://lpse.polri.go.id/eproc4" target="_blank">Informasi Lelang</a>
										<a class="dropdown-item" href="/berita-polri">Berita Polri</a>
										
										
										
									</div>
								</li>

								<li class="hs-has-sub-menu navbar-nav-item"><a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Layanan</a>
									<div id="blogSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 230px">
										<a class="dropdown-item" href="/spkt">SPKT</a>
										<a class="dropdown-item" href="/sim">SIM</a>
										<a class="dropdown-item" href="/bpkb-stnk">BPKB dan STNK</a>
										<a class="dropdown-item" href="/skck">SKCK</a>
										<a class="dropdown-item" href="/sp2hp">SP2HP</a>
										<a class="dropdown-item" href="/izin-keramaian">Izin Keramaian</a>
										<a class="dropdown-item" href="/pengawalan-jalan">Pengawalan Jalan</a>
										<a class="dropdown-item" href="/pengamanan-obvit">Pengamanan Objek Khusus</a>
									</div>
								</li>

								<li class="hs-has-sub-menu navbar-nav-item"><a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Hubungi</a>
									<div id="blogSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 230px">
										<a class="dropdown-item" href="/110">Call Center 110</a>
										<a class="dropdown-item" href="/polisiku">Aplikasi PolisiKu</a>
										<a class="dropdown-item" href="/kontak">Kontak Resmi Polri</a>
										<a class="dropdown-item" href="/kantor-polisi">Lokasi Kantor Polisi</a>
									</div>
								</li>

								<li class="hs-has-sub-menu navbar-nav-item"><a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Fitur</a>
									<div id="blogSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 230px">
										<a class="dropdown-item" href="/rekrutmen">Rekrutmen Polri</a>
										<a class="dropdown-item" href="http://lpse.polri.go.id/" target="_blank">Pengadaan Barang/ Jasa</a>
										<a class="dropdown-item" href="https://skck.polri.go.id" target="_blank">SKCK Online</a>
										<a class="dropdown-item" href="https://dumaspresisi.polri.go.id" target="_blank">Pengaduan Masyarakat</a>
										<a class="dropdown-item" href="https://tvradio.polri.go.id" target="_blank">Polri TV</a>
									</div>
								</li>

								<li class="hs-has-sub-menu navbar-nav-item"><a id="blogMegaMenu" class="hs-mega-menu-invoker nav-link nav-link-toggle" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="blogSubMenu">Internal</a>
									<div id="blogSubMenu" class="hs-sub-menu dropdown-menu" aria-labelledby="blogMegaMenu" style="min-width: 230px">
										<a class="dropdown-item" href="https://mail.polri.go.id" target="_blank">E-Mail Polri</a>
										
									</div>
								</li>

								<li class="list-inline-item text-right">
									<div class="hs-unfold">
										<a class="js-hs-unfold-invoker btn btn-xs btn-icon btn-ghost-secondary" href="javascript:;" data-hs-unfold-options='{"target": "#searchPushTop", "type": "jquery-slide", "contentSelector": ".search-push-top"}'>
											<i class="fas fa-lg fa-search"></i>
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>

	</header>
</template>