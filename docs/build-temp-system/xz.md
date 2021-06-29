<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('xz');
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
./configure --prefix=/usr --host=$LIN_TGT     \
            --build=$(build-aux/config.guess) \
            --disable-static                  \
            --disable-nls                     \
            --disable-doc                     \
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
