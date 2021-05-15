<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('expat');
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
            --docdir=/usr/share/doc/expat
```

## Сборка

```bash
make
```

## Тестирование

```bash
make -j1 check
```

## Установка

```bash
make install
```

## Установка документации

```bash
install -v -m644 doc/*.{html,png,css} /usr/share/doc/expat
```
