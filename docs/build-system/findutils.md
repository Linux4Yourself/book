<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('findutils');
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
./configure --prefix=/usr --localstatedir=/var/lib/locate
```

### Значения параметров configure
`--localstatedir` - замена расположения базы данных `locate` в `/var/lib/locate` для соответствия FHS.

## Сборка

```bash
make
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
