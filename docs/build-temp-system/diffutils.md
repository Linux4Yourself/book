<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('diffutils');
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

Запустите скрипт `configure`:

```bash
./configure --prefix=/usr --host=$LIN_TGT --disable-nls 
```

## Сборка
```bash
make
```

## Установка
```bash
make DESTDIR=$LIN install
```
