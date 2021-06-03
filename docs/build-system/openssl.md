<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('openssl');
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
./config --prefix=/usr         \
         --openssldir=/etc/ssl \
         --libdir=lib          \
         shared                \
         zlib-dynamic
```

## Сборка


```bash
make
```
## Тестирование

```bash
make test
```

## Установка

```bash
sed -i '/INSTALL_LIBS/s/libcrypto.a libssl.a//' Makefile
make MANSUFFIX=ssl install
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
MACHINE="i686"             \
CC="gcc -m32 -march=i686"  \
CXX="g++ -m32 -march=i686" \
    ./config               \
    --prefix=/usr          \
    --libdir=/usr/lib32    \
    --openssldir=/etc/ssl  \
    --libdir=lib32         \
    shared                 \
    zlib-dynamic
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

Программы: c_rehash и openssl

Библиотеки: libcrypto.so и libssl.so

Директории:  /etc/ssl, /usr/include/openssl и /usr/lib/engines

