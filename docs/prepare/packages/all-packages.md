# Все пакеты

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
	// TODO: WIP.
	new Vue({
		el: '#main',
		data: { packages: [] },
		mounted: function () {
				axios
					.get('https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/feature/core-packages/src/core-packages.json')
					.then(response => (this.packages = response.data));
		},
		
  })
</script>
