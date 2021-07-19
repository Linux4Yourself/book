<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gzip');
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
./configure --prefix=/usr --host=$LIN_TGT
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

Переместите исполняемый файл в нужную директорию:

```bash
mv -v $LIN/usr/bin/gzip $LIN/bin
```
