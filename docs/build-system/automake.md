<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('automake');
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

Внесите исправление для некорректного теста:
```bash
sed -i "s/''/etags/" t/tags-lisp-space.sh
```

```bash
./configure --prefix=/usr --docdir=/usr/share/doc/automake
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
