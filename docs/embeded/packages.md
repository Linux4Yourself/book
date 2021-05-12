# Необходимые пакеты

?> Вам следует сохранить указанные файлы в каталог ``$LIN/src``


<div
    v-for="pkg in packages"
    class="pkg"
  >
	<h2>{{ pkg.name }}</h2>
	<span>Версия: {{ pkg.version }}</span>
	<p>{{ pkg.description }}</p>
	<a :href="pkg.url">{{ pkg.url }}</a>
</div>

<script>
		new Vue({
		el: '#main',
		data: { packages: [] },
		mounted: function () {
				this.getPackages();
		},
		methods: {
			getPackages: function() {
					getPackages()
					.then(response => {
						this.packages = response.data.filter(p => 
							p.name === 'binutils' || 
							p.name === 'busybox' ||
							p.name === 'gcc' ||
							p.name === 'gmp' ||
							p.name === 'iana-etc' ||
							p.name === 'linux' ||
							p.name === 'mpc' ||
							p.name === 'mpfr' ||
							p.name === 'musl' 
						)
					});
			}
		}
  })
</script>
