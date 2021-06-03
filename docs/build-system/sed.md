<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('sed');
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

## Сборка документации

```bash
make html
```

## Тестирование

```bash
chown -Rv tester .
su tester -c "PATH=$PATH make check"
```

## Установка

```bash
make install
```

## Установка документации

```bash
install -d -m755           /usr/share/doc/sed
install -m644 doc/sed.html /usr/share/doc/sed
```
