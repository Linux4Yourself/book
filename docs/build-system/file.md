<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('file');
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
./configure --prefix=/usr    
```

### Объяснение параметров configure


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
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" ./configure \
    --prefix=/usr         \
    --libdir=/usr/lib32   \
    --host=i686-pc-linux-gnu
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

## Установленные файлы

Программы: file

Библиотеки: libmagic.so

