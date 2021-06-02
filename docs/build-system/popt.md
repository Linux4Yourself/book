<!-- Этот шаблон  можно использовавть для инструкции по сборке пакета. Каркас. -->

<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('popt');
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
./configure --prefix=/usr    \
            --disable-static 
```

## Сборка


```bash
make
```
## Тестирование

```bash
make check
```

## Установка

```bash
make install
```
