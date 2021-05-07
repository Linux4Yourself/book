<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('zlib-ng');
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
./configure --prefix=/usr --zlib-compat --native
```

### Объяснение параметров configure

`--zlib-compat` - Включает полную совместимость с API `zlib`.

`--native` - Использовать все доступные для вашего процессора оптимизации.

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

 Также, удалите не нужную статическую библиотеку:
 
```bash
 rm -fv /usr/lib/libz.a
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" \
./configure --prefix=/usr \
    --libdir=/usr/lib32  --zlib-compat --native
```

### Сборка 

```bash
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```

Также, удалите не нужную статическую библиотеку:

```bash
rm -fv /usr/lib32/libz.a
```
