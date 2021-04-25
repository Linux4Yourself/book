# {{ package.name }} v.{{ package.version }}
 {{ package.description }}

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				// Поместить в аргумент название пакета.
				this.getPackage('autoconf');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
		}
  })
</script>
