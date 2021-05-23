<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('dejagnu');
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
makeinfo --html --no-split -o doc/dejagnu.html doc/dejagnu.texi
makeinfo --plaintext       -o doc/dejagnu.txt  doc/dejagnu.texi
```

## Сборка и установка

```bash
make install
install -v -dm755  /usr/share/doc/dejagnu
install -v -m644   doc/dejagnu.{html,txt} /usr/share/doc/dejagnu
```
## Тестирование

```bash
make check
```
