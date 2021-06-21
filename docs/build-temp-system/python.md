<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('python');
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
./configure --prefix=/usr --enable-shared   --without-ensurepip
```

### Значения параметров

``--enable-shared`` - Включает установку динамических библиотек

``--without-ensurepip`` - Менеджер пакетов pip не нужен на данном этапе

## Сборка


```bash
make
```

## Установка

```bash
make install
```
