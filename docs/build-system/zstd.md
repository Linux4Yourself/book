<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('zstd');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>


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
make prefix=/usr install
rm -v /usr/lib/libzstd.a
```
 
## Для multilib

### Очистка

```bash
make clean
```

### Сборка 

```bash
CC="gcc -m32" make
```

### Установка

```bash
CC="gcc -m32" make prefix=/usr DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib/* /usr/lib32/
sed -e "/^libdir/s/lib$/lib32/" -i /usr/lib32/pkgconfig/libzstd.pc
rm -rf DESTDIR
rm -v /usr/lib32/libzstd.a
```

## Установленные файлы

Программы:  zstd, zstdcat (link to zstd), zstdgrep, zstdless, zstdmt (ссылка на zstd), and unzstd (ссылка на zstd)

Библиотеки: libzstd.so

### Краткое описание

`zstd` - Сжимает и распаковывает файлы с помощью алгоритма ZSTD

`libzstd` - Библиотека для формата сжатия ZSTD
