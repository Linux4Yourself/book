<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('intltool');
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

Исправьте предупреждение, которое может появиться при использовании perl версии 5.22 и выше:

```bash
sed -i 's:\\\${:\\\$\\{:' intltool-update.in
```

```bash
./configure --prefix=/usr
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

## Установка документации

```bash
install -v -Dm644 doc/I18N-HOWTO /usr/share/doc/intltool/I18N-HOWTO
```
