<package-info :package="package" instsize showsbu2></package-info>

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


```bash
./configure --prefix=/usr           \
            --mandir=/usr/share/man \
            --with-shared           \
            --without-debug         \
            --without-normal        \
            --enable-pc-files       \
            --enable-widec          \
            --with-pkg-config-libdir=/usr/lib/pkgconfig
```

### Значения параметров configure

`--without-normal` - Отключает установку большинства статических библиотек.

`--enable-pc-files` - Включает установку файлов для `pkg-config`.

`--enable-widec` - Включает сборку библиотек с широкими (многобайтовыми) символами. Они совместимы с обычными библиотеками `ncurses` при сборке из исходного кода, но не совместимы бинарно.

## Сборка


```bash
make
```

## Установка

```bash
make install
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

<warn>

Если вам для запуска старых бинарных программ требуется библиотека ncurses без широких символов - соберите её:

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

</warn>
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" CXX="g++ -m32" \
./configure --prefix=/usr           \
            --host=i686-pc-linux-gnu \
            --libdir=/usr/lib32     \
            --mandir=/usr/share/man \
            --with-shared           \
            --without-debug         \
            --without-normal        \
            --enable-pc-files       \
            --enable-widec          \
            --with-pkg-config-libdir=/usr/lib32/pkgconfig
```

### Сборка 

```bash
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR install
mkdir -p DESTDIR/usr/lib32/pkgconfig
for lib in ncurses form panel menu ; do
    rm -vf                    DESTDIR/usr/lib32/lib${lib}.so
    echo "INPUT(-l${lib}w)" > DESTDIR/usr/lib32/lib${lib}.so
    ln -svf ${lib}w.pc        DESTDIR/usr/lib32/pkgconfig/$lib.pc
done
rm -vf                     DESTDIR/usr/lib32/libcursesw.so
echo "INPUT(-lncursesw)" > DESTDIR/usr/lib32/libcursesw.so
ln -sfv libncurses.so      DESTDIR/usr/lib32/libcurses.so
rm -fv DESTDIR/usr/lib32/libncurses++w.a
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```

<warn>

Если вам для запуска старых бинарных программ требуется 32-битная библиотека ncurses без широких символов - соберите её:

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

</warn>

## Установленные файлы

Программы: captoinfo (ссылка на tic), clear, infocmp, infotocap (ссылка на tic), ncursesw6-config, reset (ссылка на tset), tabs, tic, toe, tput и tset

Библиотеки: libcursesw.so (ссылка на libncursesw.so), libformw.so, libmenuw.so, libncursesw.so, libpanelw.so и их версии без широких символов

Директории: /usr/share/tabset /usr/share/terminfo
