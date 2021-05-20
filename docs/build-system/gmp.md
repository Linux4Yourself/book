<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gmp');
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

?> По умолчанию gmp оптимизируется под ваш процессор. Для того чтобы её можно было запустить на другом процессоре выполните: `cp -v configfsf.guess config.guess` и `cp -v configfsf.sub config.sub`

```bash
./configure --prefix=/usr    \
            --disable-static   --enable-cxx  
```

### Значения параметров configure

`--enable-cxx` - Собрать библиотеку C++

## Сборка


```bash
make
```
## Тестирование

```bash
make check 2>&1 | tee gmp-check-log
awk '/# PASS:/{total+=$3} ; END{print total}' gmp-check-log
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

### Подготовка

```bash
cp -v configfsf.guess config.guess
cp -v configfsf.sub   config.sub
```

### Настройка

```bash
ABI="32" \
CFLAGS="-m32 -O2 -pedantic -fomit-frame-pointer -mtune=generic -march=i686" \
CXXFLAGS="$CFLAGS" \
PKG_CONFIG_PATH="/usr/lib32/pkgconfig" \
./configure             \
    --prefix=/usr       \
    --disable-static    \
    --enable-cxx        \
    --libdir=/usr/lib32 \
    --includedir=/usr/include/m32/gmp
```

### Сборка 

```bash
sed -i 's/$(exec_prefix)\/include/$\(includedir\)/' Makefile
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
cp -Rv DESTDIR/usr/include/m32/* /usr/include/m32/
rm -rf DESTDIR
```

## Установленные файлы

Библиотеки: libgmp.so libgmpxx.so
