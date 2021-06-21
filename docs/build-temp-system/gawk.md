<package-info :package="package" showsbu></package-info>

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

## Настройка

Убедимся, что лишние файлы не будут установлены

```bash
sed -i 's/extras//' Makefile.in
```


```bash
./configure --prefix=/usr   \
            --host=$LIN_TGT \
            --build=$(./config.guess)  --disable-nls  
```

## Сборка


```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
