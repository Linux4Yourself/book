<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, mpc: {}, mpfr: {}, gmp : {}, isl: {}, patch: {} },
		mounted: function () {
				this.getPackage('gcc');
				this.getMpc();
				this.getMpfr();
				this.getGmp();
				this.getIsl();
				this.getPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getMpc: function() {
					getPackage('mpc')
					.then(response => this.mpc = response);
			},
			getMpfr: function() {
					getPackage('mpfr')
					.then(response => this.mpfr = response);
			},
			getGmp: function() {
					getPackage('gmp')
					.then(response => this.gmp = response);
			},
			getIsl: function() {
					getPackage('isl')
					.then(response => this.isl = response);
			},
			getPatch: function() {
					getPackage('gcc-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Подготовка

### Дополнительные необходимые файлы

<a :href="mpc.url">{{ mpc.url}}</a>

<a :href="gmp.url">{{ gmp.url}}</a>

<a :href="mpfr.url">{{ mpfr.url}}</a>

<a :href="isl.url">{{ isl.url}}</a>

<a :href="patch.url">
{{ patch.url }}
</a>

Распакуйте дополнительные пакеты:

!> Обратите внимание, что распаковка указанных пакетов должна производится из каталога пакета GCC.

<pre>
tar -xf ../{{ mpfr.fileName }}
mv -v {{ mpfr.name }}-{{ mpfr.version }} {{ mpfr.name }}
tar -xf ../{{ gmp.fileName }}
mv -v {{ gmp.name }}-{{ gmp.version }} {{ gmp.name }}
tar -xf ../{{ mpc.fileName }}
mv -v {{ mpc.name }}-{{ mpc.version }} {{ mpc.name }}
tar -xf ../{{ isl.fileName }}
mv -v {{ isl.name }}-{{ isl.version }} {{ isl.name }}
</pre>

Смените пути установки библиотек:

```bash
sed -e '/m64=/s/lib64/lib/' \
    -e '/m32=/s/m32=.*/m32=..\/lib32$(call if_multiarch,:i386-linux-gnu)/' \
    -i.orig gcc/config/i386/t-linux64
```

Пакет {{package.name}} требует использовать отдельную директорию для сборки. Создайте её:

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
