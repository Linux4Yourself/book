<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('findutils');
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
./configure --prefix=/usr --host=$LIN_TGT   --disable-nls
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

## При раздельной структуре каталогов

Переместите исполняемый файл в нужную директорию:

```bash
mv -v $LIN/usr/bin/find $LIN/bin
sed -i 's|find:=${BINDIR}|find:=/bin|' $LIN/usr/bin/updatedb
```
