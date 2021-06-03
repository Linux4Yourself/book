<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('procps-ng');
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
./configure --prefix=/usr                            \
            --disable-static                         \
            --disable-kill --with-systemd
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
```
 
