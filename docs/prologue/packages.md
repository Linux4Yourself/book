# Информация об используемых пакетах

Как говорилось ранее, одной из целей проекта является сборка системы базового уровня. Она будет включать в себя пакеты необходимые для репликации и распространения, а также относительно небольшой набор программ, с помощью которых можно расширять систему в любом направлении на ваше усмотрение. Это не значит, что она будет максимально компактной. 

Есть пакеты, которые включены но строго не требуются. В списке, который расположен ниже, имеются описания для каждого пакета.

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
					.get('https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/develop/src/core-packages.json')
					.then(response => (this.packages = response.data));
		},
  })
</script>
