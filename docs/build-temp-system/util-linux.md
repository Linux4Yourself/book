{{ include('../packages/util-linux/README.md') }}


## Настройка

В FHS рекомендуется использовать директорию `/var/lib/hwclock` для файла `adjtime`. Создайте её:

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

### Значения параметров

`--disable-*` - отключает программы, которые предоставляются другими пакетами

`--without-python` - отключает сборку ненужных привязок python.

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

### Очистка

```bash
make distclean
```

### Настройка
Запустите скрипт `configure`:

```bash
CC="gcc -m32" \
./configure ADJTIME_PATH=/var/lib/hwclock/adjtime \
            --enable-usrdir-path                  \
            --host=i686-pc-linux-gnu              \
            --libdir=/usr/lib32                   \
            --disable-bash-completion             \
            --disable-chfn-chsh                   \
            --disable-fdisks                      \
            --disable-fsck                        \
            --disable-login                       \
            --disable-mount                       \
            --disable-nologin                     \
            --disable-pylibmount                  \
            --disable-runuser                     \
            --disable-schedutils                  \
            --disable-setpriv                     \
            --disable-static                      \
            --disable-su                          \
            --without-python
```

### Значение параметров:

`--disable-*` - позволяет сэкономить время, отключив сборку ненужных компонентов.

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
