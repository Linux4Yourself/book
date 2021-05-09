<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('bc');
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
CC=gcc ./configure --prefix=/usr -G -O3
```

## Сборка


```bash
make
```

## Тестирование

```bash
make test
```

## Установка

```bash
make install
```
