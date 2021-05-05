<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('util-linux');
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

FHS рекомендует использовать директорию ``/var/lib/hwclock`` для файла ``adjtime``. Создайте её:

```bash
mkdir -pv /var/lib/hwclock
```

Запустите скрипт `configure`:

```bash
./configure ADJTIME_PATH=/var/lib/hwclock/adjtime    \
            --disable-chfn-chsh  \
            --disable-login      \
            --disable-nologin    \
            --disable-su         \
            --disable-setpriv    \
            --disable-runuser    \
            --disable-pylibmount \
            --disable-static     \
            --without-python     \
            runstatedir=/run
```

## Сборка


```bash
make
```

## Установка

```bash
make install
```

## Для MultiLib

Необходимо собрать 32-битные библиотеки из состава этого пакета:

Очистите директории сборки:

```bash
make distclean
```

Запустите скрипт `configure`:

```bash
CC="gcc -m32" \
./configure ADJTIME_PATH=/var/lib/hwclock/adjtime    \
            --docdir=/usr/share/doc/util-linux-2.36.2 \
            --disable-chfn-chsh  \
            --disable-login      \
            --disable-nologin    \
            --disable-su         \
            --disable-setpriv    \
            --disable-runuser    \
            --disable-pylibmount \
            --disable-static     \
            --without-python     \
            --libdir=/usr/lib32      \
            --host=i686-pc-linux-gnu
```

Соберите пакет:

```bash
make
```

Установите пакет:

```bash
make DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
