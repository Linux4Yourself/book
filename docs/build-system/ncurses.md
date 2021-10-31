{{ include('../packages/ncurses/README.md') }}

## Настройка

```bash 
{{ include('../packages/ncurses/configure') }}
```

### Значения параметров

`--without-normal` - отключает установку большинства статических библиотек.

`--enable-pc-files` - включает установку файлов для `pkg-config`.

`--enable-widec` - включает сборку библиотек с широкими (многобайтовыми) символами. Они совместимы с обычными библиотеками `ncurses` при сборке из исходного кода, но не совместимы бинарно.

## Сборка

```bash 
{{ include('../packages/ncurses/build') }}
```

## Установка

```bash 
{{ include('../packages/ncurses/install') }}
```

Многие пакеты при компоновке ищут библиотеки без широких символов. Для компоновки с библиотеками содержащими широкие символы выполните:

```bash
for lib in ncurses form panel menu ; do
    rm -vf                    /usr/lib/lib${lib}.so
    echo "INPUT(-l${lib}w)" > /usr/lib/lib${lib}.so
    ln -sfv ${lib}w.pc        /usr/lib/pkgconfig/${lib}.pc
done
```

Для сборки старых программ использующих `-lcurses` выполните:

```bash
rm -vf                     /usr/lib/libcursesw.so
echo "INPUT(-lncursesw)" > /usr/lib/libcursesw.so
ln -sfv libncurses.so      /usr/lib/libcurses.so
```

Удалите ненужную статическую библиотеку:

```bash
rm -fv /usr/lib/libncurses++w.a
```

???+ note "Обратите внимание"

    Если для запуска старых бинарных программ требуется библиотека `ncurses` без широких символов - соберите её:

```bash
make distclean
./configure --prefix=/usr    \
            --with-shared    \
            --without-normal \
            --without-debug  \
            --without-cxx-binding \
            --with-abi-version=5
make sources libs
cp -av lib/lib*.so.5* /usr/lib
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/ncurses/cldirs') }}
```

## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash 
{{ include('../packages/ncurses/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/ncurses/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/ncurses/multi_install') }}
```

???+ note "Обратите внимание"

    Если для запуска старых бинарных программ требуется библиотека `ncurses` без широких символов - соберите её:

```bash
make distclean
CC="gcc -m32" CXX="g++ -m32" ./configure --prefix=/usr    \
            --with-shared    \
            --without-normal \
            --without-debug  \
            --without-cxx-binding \
            --with-abi-version=5 --host=i686-pc-linux-gnu
make sources libs
cp -av lib/lib*.so.5* /usr/lib
```

## Установленные файлы

Программы: `captoinfo` (ссылка на `tic`), `clear`, `infocmp`, `infotocap` (ссылка на `tic`), `ncursesw6-config`, `reset` (ссылка на `tset`), `tabs`, `tic`, `toe`, `tput` и `tset`

Библиотеки: `libcursesw.so` (ссылка на `libncursesw.so`), `libformw.so`, `libmenuw.so`, `libncursesw.so`, `libpanelw.so` и их версии без широких символов

Директории: /usr/share/tabset /usr/share/terminfo


