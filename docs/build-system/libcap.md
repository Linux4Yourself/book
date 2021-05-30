<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('libcap');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

Отключите установку статических библиотек:

```bash
sed -i '/install -m.*STA/d' libcap/Makefile
```

## Сборка


```bash
make prefix=/usr lib=lib
```
## Тестирование

```bash
make test
```

## Установка

```bash
make prefix=/usr lib=lib install
```

Установите корректные права для библиотек:

```bash
chmod -v 755 /usr/lib/lib{cap,psx}.so.2
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Сборка 

```bash
make CC="gcc -m32 -march=i686"
```

### Установка

```bash
make lib=lib32 prefix=$PWD/DESTDIR/usr -C libcap install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
sed -e "s|^libdir=.*|libdir=/usr/lib32|" -i /usr/lib32/pkgconfig/lib{cap,psx}.pc
chmod -v 755 /usr/lib32/lib{cap,psx}.so.2
rm -rf DESTDIR
```

## Установленные файлы

Программы:  capsh, getcap, getpcaps и setcap

Библиотеки:  libcap.so и libpsx.so

