<!-- Этот шаблон  можно использовавть для инструкции по сборке пакета. Каркас. -->

<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('make');
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
./configure --prefix=/usr   \
            --without-guile \
            --host=$LIN_TGT \
            --build=$(build-aux/config.guess)  --disable-nls
```

### Значения параметров

`--without-guile` - в процессе настройки, если не указать этот параметр, `guile` будет задействован с хост-системы. Так как мы выполняем кросс компиляцию, следует выставить этот параметр.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
