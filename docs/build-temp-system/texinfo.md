<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('texinfo');
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
./configure --prefix=/usr
```

???+ note "Обратите внимание"
	  Во время процесса настройки выполняется тест, который указывает на ошибку TestXS_la-TestXS.lo. Её можно игнорировать.

## Сборка

```bash
make
```

## Установка

```bash
make install
```
