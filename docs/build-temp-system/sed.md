<!-- Этот шаблон  можно использовавть для инструкции по сборке пакета. Каркас. -->

<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('sed');
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
            --host=$LIN_TGT \
```

## Сборка
```bash
make
```

## Установка
```bash
make DESTDIR=$LIN install
```