<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gettext');
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
./configure --disable-static
```

### Значения параметров

`--disable-static` - так как это временный инструмент, то не требуется наличие общих библиотек, поэтому и нет необходимости их создавать.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=/usr install
```
