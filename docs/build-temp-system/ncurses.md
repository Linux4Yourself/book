{{ include('../packages/ncurses/README.md') }}

## Настройка

Убедитесь, что `gawk` будет найден первым:

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

`--without-manpages`, `--without-tests`, `--without-cxx` - man-страницы, тесты и библиотека C++ не нужны для временной системы.

`--without-ada` - отключает сборку компонентов на языке Ada, так как в собираемой системе отсутствуют необходимые для их запуска компоненты.

`--without-normal` - отключает установку большинства статических библиотек.

`--enable-widec` - включает установку библиотек с поддержкой многобайтовых символов.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN TIC_PATH=$(pwd)/tic-build/progs/tic install
echo "INPUT(-lncursesw)" > $LIN/usr/lib/libncurses.so
```

## При раздельной структуре каталогов

Переместите разделяемые библиотеки в `$LIN/lib`:

```bash
mv -v $LIN/usr/lib/libncursesw.so.6* $LIN/lib
```

Поскольку библиотеки были перемещены, одна символическая ссылка указывает на несуществующий файл. Исправьте это:

```bash
ln -sfv ../../lib/$(readlink $LIN/usr/lib/libncursesw.so) $LIN/usr/lib/libncursesw.so
```

## Для multilib

### Настройка

Выполните:

```bash
make distclean
```

Чтобы очистить директорию от файлов предыдущей сборки.

Запустите скрипт `configure`:

```bash
CC="$LIN_TGT-gcc -m32"                   \
CXX="$LIN_TGT-g++ -m32"                  \
DESTDIR=$LIN                             \
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
