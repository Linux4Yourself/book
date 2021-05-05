<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('perl');
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
<!-- TODO: Заменять вручную, т.к. в таком выводе нельзя использовать функционал vuejs -->
```bash
sh Configure -des                                        \
             -Dprefix=/usr                               \
             -Dvendorprefix=/usr                         \
             -Dprivlib=/usr/lib/perl5/5.32/core_perl     \
             -Darchlib=/usr/lib/perl5/5.32/core_perl     \
             -Dsitelib=/usr/lib/perl5/5.32/site_perl     \
             -Dsitearch=/usr/lib/perl5/5.32/site_perl    \
             -Dvendorlib=/usr/lib/perl5/5.32/vendor_perl \
             -Dvendorarch=/usr/lib/perl5/5.32/vendor_perl
```
### Значения параметров configure
``-des``  Это комбинация трех опций:

``-d`` использует значения по умолчанию для всех элементов,

``-e`` обеспечивает выполнение всех задач,

``-s`` отключает вывод лишней информации.

## Сборка
```bash
make
```

## Установка

```bash
make install
```
