<template>
	<footer class="bg-dark">
		<div class="container">
			<div class="space-top-2 space-bottom-1 space-bottom-lg-2">
				<div class="row justify-content-lg-between">
					<div class="col-lg-4 ml-lg-auto mb-5 mb-lg-0">
						<div>
							<a href="/" aria-label="Front">
								<img  :src="require('~/assets/images/logo/logo-polri.png')" alt="Logo" />
							</a>
						</div>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link media">
									<b class="text-light">Kepolisian Republik Indonesia</b>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link media">
									<p style="font-size: 10px">
										Dikembangkan Oleh
										<br>Divisi Teknologi Informasi & Komunikasi Polri
										<br />Jl. Trunojoyo No. 3, Kebayoran Baru, Jakarta Selatan,
										<br />DKI Jakarta. 12110. (021) 7218638
									</p>
								</a>
							</li>
						</ul>
					</div>
					<div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">
						<h5 class="text-white">Tentang Polri
						</h5>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link" href="/pesan-kapolri">Pesan Kapolri</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/arti-lambang">Arti Lambang</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/sejarah">Sejarah</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/visimisi">Visi dan Misi</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/struktur-organisasi">Struktur Organisasi</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/satker-polri">Satuan Kerja</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/satwil-polri">Satuan Wilayah</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/mitra-polri">Mitra Polri</a>
							</li>
						</ul>
					</div>
					<div class="col-6 col-md-3 col-lg mb-5 mb-lg-0">
						<h5 class="text-white">Layanan Polri
						</h5>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link" href="/spkt">SPKT</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/sim">SIM</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/bpkb-stnk">BPKB/STNK</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/skck">SKCK</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/sp2hp">SP2HP</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/izin-keramaian">Izin Keramaian</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/pengawalan-jalan">Pengawalan Jalan</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/pengamanan-obvit">Pengamanan Obyek Khusus</a>
							</li>
						</ul>
					</div>
					<div class="col-6 col-md-3 col-lg">
						<h5 class="text-white">Fitur
						</h5>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link" href="/rekrutmen" target="_blank">Rekrutmen</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="http://lpse.polri.go.id" target="_blank">Pengadaan Barang/Jasa</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://dumaspresisi.polri.go.id" target="_blank">Pengaduan Masyarakat</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://skck.polri.go.id/">SKCK Online</a>
							</li>
						</ul>
						<h5 class="text-white mt-2">Hubungan Polri
						</h5>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link" href="/110" >Call Center 110</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/polisiku">Aplikasi PolisiKu</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="/kontak">Kontak Resmi</a>
							</li>
						</ul>
					</div>
					<div class="col-6 col-md-3 col-lg">
						<h5 class="text-white">Informasi Publik
						</h5>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link" href="https://humas.polri.go.id/informasi-serta-merta" target="_blank">Informasi Serta Merta</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://humas.polri.go.id/informasi-setiap-saat" target="_blank">Informasi Setiap Saat</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://humas.polri.go.id/berkala" target="_blank">Informasi Berkala</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="https://humas.polri.go.id/dikecualikan" target="_blank">Informasi Dikecualikan</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="http://presisi.divkum.polri.go.id/Dokumen.aspx" target="_blank">UU dan Peraturan</a>
							</li>
						</ul>
						<h5 class="text-white mt-2">Internal Polri
						</h5>
						<ul class="nav nav-sm nav-x-0 nav-white flex-column">
							<li class="nav-item">
								<a class="nav-link" href="https://mail.polri.go.id/" target="_blank">Email Polri</a>
							</li>

						</ul>
					</div>
				</div>
			</div>
			<div class="w-md-75 text-lg-center mx-lg-auto">
				<p class="text-white opacity-sm small text-center">
					WEBSITE RESMI KEPOLISIAN REPUBLIK INDONESIA &copy; 2021
				</p>
			</div>
			<div class="space-bottom-1">
			</div>
		</div>
	</footer>
</template>