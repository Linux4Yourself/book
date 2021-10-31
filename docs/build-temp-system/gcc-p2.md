
{{ include('../packages/gcc/README.md') }}

## Подготовка

### Дополнительные необходимые файлы


```bash 
{{ include('../packages/mpc/.url') }}
```

```bash 
{{ include('../packages/gmp/.url') }}
```

```bash 
{{ include('../packages/mpfr/.url') }}
```

```bash 
{{ include('../packages/isl/.url') }}
```


Распакуйте дополнительные пакеты:

???+ warning "Предупреждение"
	 Обратите внимание, что распаковка указанных пакетов должна производится из каталога пакета GCC.

<pre>
tar -xf ../```bash 
{{ include('../packages/mpfr/.filename') }}
```
mv -v ```bash 
{{ include('../packages/mpfr/.filename') }}
``` ```bash 
{{ include('../packages/mpfr/.name') }}
```

tar -xf ../```bash 
{{ include('../packages/gmp/.filename') }}
```
mv -v ```bash 
{{ include('../packages/gmp/.filename') }}
``` ```bash 
{{ include('../packages/gmp/.name') }}
```

tar -xf ../```bash 
{{ include('../packages/mpc/.filename') }}
```
mv -v ```bash 
{{ include('../packages/mpc/.filename') }}
``` ```bash 
{{ include('../packages/mpc/.name') }}
```


tar -xf ../```bash 
{{ include('../packages/isl/.filename') }}
```
mv -v ```bash 
{{ include('../packages/isl/.filename') }}
``` ```bash 
{{ include('../packages/isl/.name') }}
```

</pre>

Смените пути установки библиотек:

```bash
sed -e '/m64=/s/lib64/lib/' \
    -e '/m32=/s/m32=.*/m32=..\/lib32$(call if_multiarch,:i386-linux-gnu)/' \
    -i.orig gcc/config/i386/t-linux64
```

Пакет GCC требует использовать отдельную директорию для сборки. Создайте её:

```bash
mkdir -v build
cd       build
```

Разрешим сборку `libgcc` с поддержкой многопоточности:

```bash
mkdir -pv $LIN_TGT/libgcc
ln -s ../../../libgcc/gthr-posix.h $LIN_TGT/libgcc/gthr-default.h
```

Настройка:

```bash
../configure                   \
    --build=$(../config.guess) \
    --host=$LIN_TGT            \
    --prefix=/usr              \
    CC_FOR_TARGET=$LIN_TGT-gcc \
    --with-build-sysroot=$LIN  \
    --enable-initfini-array    \
    --disable-nls              \
    --disable-decimal-float    \
    --disable-libatomic        \
    --disable-libgomp          \
    --disable-libquadmath      \
    --disable-libssp           \
    --disable-libvtv           \
    --disable-libstdcxx        \
    --enable-languages=c,c++   \
    --disable-multilib
```

### Для multilib

замените параметр `--disable-multilib` на `--enable-multilib --with-multilib-list=m64,m32`

### Значения параметров

`--enable-initfini-array` - параметр заставляет использовать некоторые внутренние структуры данных, которые необходимы, но не могут быть обнаружены при построении кросс-компилятора.

`--disable-decimal-float, --disable-threads, --disable-libatomic, --disable-libgomp, --disable-libquadmath, --disable-libssp, --disable-libvtv, --disable-libstdcxx` - параметр отключают поддержку десятичных расширений с плавающей запятой, потоковой передачи, libatomic, libgomp, libquadmath, libssp, libvtv и стандартной библиотеки C++ соответственно. Эти функции не будут скомпилированы при сборке кросс-компилятора и не являются необходимыми для кросс-компиляции временной libc.

`--enable-languages​​=c,c++` - опция включает поддержку компиляторов C и C++. Это единственные языки, которые нужны сейчас.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

Некоторые программы используют команду `cc`, а не `gcc`. Создайте символическую ссылку на `gcc`:

```bash
ln -sv gcc $LIN/usr/bin/cc
```
