<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('flex');
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
./configure --prefix=/usr    \
            --disable-static 
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

Некоторые программы обращаются к `lex`, а не `flex`, поэтому создайте ссылку:

```bash
ln -sv flex /usr/bin/lex
```
 
## Установленные файлы

Программы: `flex`, `flex++` (ссылка на `flex`) и `lex` (ссылка на `flex`)

Библиотеки: `libfl.so`

