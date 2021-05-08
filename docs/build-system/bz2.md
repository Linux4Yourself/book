<package-info :package="package" showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('bzip2');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
			getBzip-patch: function() {
					getPackage('bzip2-patch')
					.then(response => this.glibc-patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="bzip2-patch.url">{{ bzip2-patch.url}}</a>



## Подготовка

Примените патч для правильной установки документации:

```bash
patch -Np1 -i ../bzip2-1.0.8-install_docs-1.patch
```

Убедитесь, что будут созданны относительные символические ссылки:

```bash
sed -i 's@\(ln -s -f \)$(PREFIX)/bin/@\1@' Makefile
```

Исправьте путь установки man-страниц:

```bash
sed -i "s@(PREFIX)/man@(PREFIX)/share/man@g" Makefile
```

## Сборка

Для сборки динамической библиотеки `libbz2.so` выполните:

```bash
make -f Makefile-libbz2_so
make clean
```

Далее соберите сам пакет:

```bash
make
```

## Установка

```bash
make PREFIX=/usr install
cp -v bzip2-shared /bin/bzip2
cp -av libbz2.so* /lib
ln -sv libbz2.so.1.0 /usr/lib/libbz2.so
rm -v /usr/bin/{bunzip2,bzcat}
ln -sv bzip2 /bin/bunzip2
ln -sv bzip2 /bin/bzcat
```
 
## Для multilib

### Очистка

```bash
make clean
```

### Сборка 

```bash
sed -e "s/^CC=.*/CC=gcc -m32/" -i Makefile{,-libbz2_so}
make -f Makefile-libbz2_so
make libbz2.a
```

### Установка

```bash
install -Dm755 libbz2.so.1.0.8 /usr/lib32/libbz2.so.1.0.8
ln -sf libbz2.so.1.0.8 /usr/lib32/libbz2.so
ln -sf libbz2.so.1.0.8 /usr/lib32/libbz2.so.1
ln -sf libbz2.so.1.0.8 /usr/lib32/libbz2.so.1.0
install -Dm644 libbz2.a /usr/lib32/libbz2.a
```
