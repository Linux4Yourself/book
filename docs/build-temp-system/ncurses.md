<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('ncurses');
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

Во-первых, убедитесь что `gawk` будет найден первым:

```bash
sed -i s/mawk// configure
```

Для установки `ncurses` требуется программа `tic`. Соберите её:

```bash
mkdir tic-build
cd tic-build
  ../configure
  make -C include
  make -C progs tic
cd ..
```

Запустите скрипт `configure`:

```bash
./configure --prefix=/usr                \
            --host=$LIN_TGT              \
            --build=$(./config.guess)    \
            --without-manpages           \
            --without-tests              \
            --without-cxx                \
            --with-shared                \
            --without-debug              \
            --without-ada                \
            --without-normal             \
            --enable-widec
```

### Значения параметров

`--without-manpages , --without-tests, --without-cxx` - Man-страницы, тесты и библиотека c++ не нужны для временной системы.

`--without-ada` - Отключает сборку компонентов на языке `ada`, так как в собираемой системе отсутствуют необходимые для их запуска компоненты.

`--without-normal` - Отключает установку большинства статических библиотек.

`--enable-widec` - Включает установку библиотек с поддержкой много-байтовых символов.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN TIC_PATH=$(pwd)/tic-build/progs/tic install
echo "INPUT(-lncursesw)" > $LIN/usr/lib/libncurses.so
```

## Для multilib

### Настройка

Соберите 32-битную версию ncurses:
Для этого, во-первых, выполните:

```bash
make distclean
```

Чтобы очистить директорию от файлов предыдущей сборки.

Далее запустите скрипт `configure`:

```bash
CC="$LIN_TGT-gcc -m32"                   \
CXX="$LIN_TGT-g++ -m32"                  \
./configure --prefix=/usr                \
            --host=$LIN_TGT32            \
            --build=$(./config.guess)    \
            --libdir=/usr/lib32          \
            --without-manpages           \
            --without-tests              \
            --without-cxx                \
            --without-progs              \
            --with-shared                \
            --without-debug              \
            --without-ada                \
            --without-normal             \
            --enable-pc-files            \
            --enable-widec               \
            --with-pkg-config-libdir=/usr/lib32/pkgconfig
```

### Сборка

```bash
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR TIC_PATH=$(pwd)/tic-build/progs/tic install
ln -s libncursesw.so DESTDIR/usr/lib32/libcursesw.so
cp -Rv DESTDIR/usr/lib32/* $LIN/usr/lib32
rm -rf DESTDIR
```
