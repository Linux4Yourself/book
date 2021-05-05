<!-- Этот шаблон  можно использовавть для инструкции по сборке пакета. Каркас. -->

<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				// заменить на название пакета, которые необходим.
				// см. файл.https://github.com/Linux4Yourself/Linux4Yourself.Book.Packages/blob/develop/src/core-packages.json
				this.getPackage('m4');
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

## Сборка


```bash
make
```

## Установка

```bash
make install
```
