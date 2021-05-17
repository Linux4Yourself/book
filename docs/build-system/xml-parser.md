<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('XML-Parser');
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
perl Makefile.PL
```

## Сборка


```bash
make
```
## Тестирование

```bash
make test
```

## Установка

```bash
make install
```
 

## Установленные файлы

Библиотеки: Модуль `perl` - `Expat.so`

