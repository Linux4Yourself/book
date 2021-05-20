<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('groff');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

Groff ожидает переменную окружения `PAGE` значение которой должно содержать формат бумаги по умолчанию. Указание значение переменной ``PAGE=A4`` может быть более подходящим. Хотя значение по умолчанию задается во время компиляции, его можно переопределить позже, путем выполнения команды `echo` с указанием значения `«A4»` или `«letter»` в файле ``/etc/papersize``.

## Настройка

```bash
PAGE=A4 ./configure --prefix=/usr
```

### Значения параметров configure
`PAGE=A4` - формат бумаги.

## Сборка

Пакет не поддерживает параллельную сборку. Выполните компиляцию пакета:

```bash
make -j1
```

## Установка

```bash
make install
```
