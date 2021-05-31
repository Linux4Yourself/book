<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('nano');
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
./configure --prefix=/usr     \
            --sysconfdir=/etc \
            --enable-utf8     
```

## Сборка

```bash
make
```

## Установка

```bash
make install
```

## Установка документации

```bash
install -v -m644 doc/{nano.html,sample.nanorc} /usr/share/doc/nano
```
