<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gdbm');
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
            --disable-static \
            --enable-libgdbm-compat
```

## Объяснение параметров configure

``--enable-libgdbm-compat`` - Позволяет использовать библиотеку для совместимости c `libgdbm`. Некоторые пакеты могут использовать старые процедуры DBM, которые и предоставляет эта библиотека.

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
