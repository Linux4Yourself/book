<package-info :package="package" showsbu2></package-info>

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
chmod -v 0755 /usr/lib/preloadable_libintl.so
```
