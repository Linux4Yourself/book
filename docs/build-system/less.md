<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('less');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Настройка

```bash
./configure --prefix=/usr --sysconfdir=/etc
```

### Значения параметров configure
`--sysconfdir=/etc` - настроить путь `/etc` для хранения конфигурации.

## Сборка

```bash
make
```

## Установка

```bash
make install
```
