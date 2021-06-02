<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gawk');
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

Следует убедиться, что ненужные файлы не будут установлены

```bash
sed -i 's/extras//' Makefile.in
```

## Настройка

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
mkdir -v /usr/share/doc/gawk
cp    -v doc/{awkforai.txt,*.{eps,pdf,jpg}} /usr/share/doc/gawk
```
