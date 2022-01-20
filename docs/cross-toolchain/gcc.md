{{ include('../packages/gcc/README.md') }}

## Подготовка


???+ warning "Предупреждение"
	Распаковка указанных пакетов должна производиться из каталога `{{ include('../packages/gcc/.name') }}`. Проверьте текущее местоположение, прежде чем выполнить команды ниже.

```bash
tar -xf ../{{ include('../packages/mpfr/.filename') }}
mv -v {{ include('../packages/mpfr/.name') }} {{ include('../packages/mpfr/.name_short') }}
tar -xf ../{{ include('../packages/gmp/.filename') }}
mv -v {{ include('../packages/gmp/.name') }} {{ include('../packages/gmp/.name_short') }}
tar -xf ../{{ include('../packages/mpc/.filename') }}
mv -v {{ include('../packages/mpc/.name') }} {{ include('../packages/mpc/.name_short') }}
tar -xf ../{{ include('../packages/isl/.filename') }}
mv -v {{ include('../packages/isl/.name') }} {{ include('../packages/isl/.name_short') }}
```

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

## Настройка

```bash
../configure                  \
    --target=$LIN_TGT         \
    --prefix=$LIN/tools       \
    --with-glibc-version=2.11 \
    --with-sysroot=$LIN       \
    --with-newlib             \
    --without-headers         \
    --enable-initfini-array   \
    --disable-nls             \
    --disable-shared          \
    --disable-decimal-float   \
    --disable-threads         \
    --disable-libatomic       \
    --disable-libgomp         \
    --disable-libquadmath     \
    --disable-libssp          \
    --disable-libvtv          \
    --disable-libstdcxx       \
    --enable-languages=c,c++  \
    --disable-multilib
```

### Для multilib

Замените параметр `--disable-multilib` на `--enable-multilib --with-multilib-list=m64,m32`

### Значения параметров

`--with-glibc-version = 2.11` - эта опция гарантирует, что пакет будет совместим с версией glibc на хосте. Для него установлено минимальное требование glibc, указанное в Требованиях к хост-системе.

`--with-newlib` - поскольку рабочая библиотека C еще недоступна, это гарантирует, что константа `ignit_libc` определена при сборке libgcc. Это предотвращает компиляцию любого кода, требующего поддержки libc.

`--without-headers` - при создании полного кросс-компилятора GCC требует стандартных заголовков, совместимых с целевой системой. Для наших целей эти заголовки не понадобятся. Этот переключатель предотвращает их поиск GCC.

`--enable-initfini-array` - этот переключатель заставляет использовать некоторые внутренние структуры данных, которые необходимы, но не могут быть обнаружены при построении кросс-компилятора.

`--disable-shared` - этот переключатель заставляет GCC связывать свои внутренние библиотеки статически. Нам это нужно, потому что общие библиотеки требуют glibc, которая ещё не установлена ​​в целевой системе.

`--disable-decimal-float`, `--disable-threads`, `--disable-libatomic`, `--disable-libgomp`, `--disable-libquadmath`, `--disable-libssp`, `--disable-libvtv`, `--disable-libstdcxx` - эти переключатели отключают поддержку десятичных расширений с плавающей запятой, потоковой передачи, libatomic, libgomp, libquadmath, libssp, libvtv и стандартной библиотеки C++ соответственно. Эти функции не будут скомпилированы при сборке кросс-компилятора и не являются необходимыми для кросс-компиляции временной libc.

`--enable-languages​​=c,c++` - эта опция гарантирует, что будут построены только компиляторы C и C++. Это единственные языки, которые нужны сейчас.

## Сборка

```bash
make
```

## Установка

```bash
make install
```

Создайте полную версию `limits.h` - заголовочного файла, в котором записаны лимиты:

```bash
cd ..
cat gcc/limitx.h gcc/glimits.h gcc/limity.h > \
  `dirname $($LIN_TGT-gcc -print-libgcc-file-name)`/install-tools/include/limits.h
```
