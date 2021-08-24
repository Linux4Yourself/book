<package-info :package="package" showsbu></package-info>

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
./configure --disable-shared
```

### Значения параметров

`--disable-shared` - так как это временный инструмент, то не требуется наличие общих библиотек, поэтому и нет необходимости их создавать.

## Сборка

```bash
make
```

## Установка

Нам понадобятся только следующие утилиты: `msgfmt`, `msgmerge` и `xgettext`. Поэтому выполните установку только перечисленных.

```bash
cp -v gettext-tools/src/{msgfmt,msgmerge,xgettext} /usr/bin
```
