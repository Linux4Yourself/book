<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('isl');
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
./configure --prefix=/usr        \
            --disable-static     
```

## Сборка


```bash
make
```

## Установка

```bash
make install
```

Переместите неправильно установленные файлы:

```bash
mkdir -pv /usr/share/gdb/auto-load/usr/lib
mv -v /usr/lib/libisl*gdb.py /usr/share/gdb/auto-load/usr/lib
```
 
## Установленные файлы

Библиотеки: libmpc.so

