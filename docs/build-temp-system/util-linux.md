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

FHS рекомендует использовать директорию `/var/lib/hwclock` для файла `adjtime`. Создайте её:

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
            runstatedir=/run  --enable-usrdir-path
```

### Значения параметров

`--disable-*` - Отключает программы, которые предоставляются другими пакетами

`--without-python` - Отключает сборку ненужных привязок python.

## Сборка

```bash
make
```

## Установка

```bash
make install
```

## Для multilib

Необходимо собрать 32-битные библиотеки из состава этого пакета:

Очистите директории сборки:

```bash
make distclean
```

Запустите скрипт `configure`:

```bash
CC="gcc -m32" \
./configure ADJTIME_PATH=/var/lib/hwclock/adjtime \
            --enable-usrdir-path      \
            --host=i686-pc-linux-gnu  \
            --libdir=/usr/lib32       \
            --disable-bash-completion \
            --disable-chfn-chsh  \
            --disable-fdisks     \
            --disable-fsck       \
            --disable-login      \
            --disable-mount      \
            --disable-nologin    \
            --disable-pylibmount \
            --disable-runuser    \
            --disable-schedutils \
            --disable-setpriv    \
            --disable-static     \
            --disable-su         \
            --without-python
```

Объяснение опций configure:

`--disable-*` - Позволяет сэкономить время, отключив сборку ненужных компонентов.

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
