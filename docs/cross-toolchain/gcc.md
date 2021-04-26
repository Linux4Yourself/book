# {{ package.name }} v.{{ package.version }}

Описание: {{ package.description }}

Ссылка для загрузки: <a :href="package.url">{{ package.url}}</a>

Размер архива: {{ package.size }}

Имя файла: {{ package.fileName }}

md5-сумма файла: {{ package.md5 }}

Страница релизов: <a :href="package.releasesUrl">{{ package.releasesUrl}}</a>

Домашняя страница:  <a :href="package.homeUrl">{{ package.homeUrl}}</a>

Приоритет: {{ package.priority }}

SBU: {{ package.sbu }}

<script>
		new Vue({
		el: '#main',
		data: { package: {}, mpc: {}, mpfgr: {}, gmp : {}, isl: {} },
		mounted: function () {
				this.getPackage('gcc');
				this.getMpc();
				this.getMpfr();
				this.getGmp();
				this.getIsl();
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
					.then(response => this.mpfgr = response);
			},
			getGmp: function() {
					getPackage('gmp')
					.then(response => this.gmp = response);
			},
			getIsl: function() {
					getPackage('isl')
					.then(response => this.isl = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="mpc.url">{{ mpc.url}}</a>

<a :href="gmp.url">{{ gmp.url}}</a>

<a :href="mpfgr.url">{{ mpfgr.url}}</a>

<a :href="isl.url">{{ isl.url}}</a>

## Сборка 

Сначала распакуйте дополнительные пакеты:

```bash
tar -xf ../mpfr-4.1.0.tar.xz
mv -v mpfr-4.1.0 mpfr
tar -xf ../gmp-6.2.1.tar.xz
mv -v gmp-6.2.1 gmp
tar -xf ../mpc-1.2.1.tar.gz
mv -v mpc-1.2.1 mpc
tar -xf ../isl-0.23.tar.xz
mv -v isl-0.23 isl
```

Смените пути установки библиотек:

```bash
sed -e '/m64=/s/lib64/lib/' \
    -e '/m32=/s/m32=.*/m32=..\/lib32$(call if_multiarch,:i386-linux-gnu)/' \
    -i.orig gcc/config/i386/t-linux64
```

Документация gcc рекомендует использовать отдельную директорию для сборки:

```bash
mkdir bld
cd bld
```

Сначала запустим скрипт `configure`:
```bash
../configure                                       \
    --target=$LIN_TGT                              \
    --prefix=$LIN/tools                            \
    --with-glibc-version=2.11                      \
    --with-sysroot=$LIN                            \
    --with-newlib                                  \
    --without-headers                              \
    --enable-initfini-array                        \
    --disable-nls                                  \
    --disable-shared                               \
    --disable-decimal-float                        \
    --disable-threads                              \
    --disable-libatomic                            \
    --disable-libgomp                              \
    --disable-libquadmath                          \
    --disable-libssp                               \
    --disable-libvtv                               \
    --disable-libstdcxx                            \
    --enable-languages=c,c++ --disable-multilib
```

Для MultiLib замените параметр `--disable-multilib` на `  --enable-multilib --with-multilib-list=m64,m32`

### Объяснение 

`--with-glibc-version = 2.11`    Эта опция гарантирует, что пакет будет совместим с версией glibc на хосте. Для него установлено минимальное требование glibc, указанное в Требованиях к хост-системе.

`--with-newlib`    Поскольку рабочая библиотеки C еще недоступна, это гарантирует, что константа ignit_libc определена при сборке libgcc. Это предотвращает компиляцию любого кода, требующего поддержки libc.

`--without-headers`    При создании полного кросс-компилятора GCC требует стандартных заголовков, совместимых с целевой системой. Для наших целей эти заголовки не понадобятся. Этот переключатель предотвращает их поиск GCC.

`--enable-initfini-array`    Этот переключатель заставляет использовать некоторые внутренние структуры данных, которые необходимы, но не могут быть обнаружены при построении кросс-компилятора.

`--disable-shared`    Этот переключатель заставляет GCC связывать свои внутренние библиотеки статически. Нам это нужно, потому что общие библиотеки требуют glibc, которая еще не установлена ​​в целевой системе.

`--disable-decimal-float, --disable-threads, --disable-libatomic, --disable-libgomp, --disable-libquadmath, --disable-libssp, --disable-libvtv, --disable-libstdcxx`    Эти переключатели отключают поддержку десятичных расширений с плавающей запятой, потоковой передачи, libatomic, libgomp, libquadmath, libssp, libvtv и стандартной библиотеки C ++ соответственно. Эти функции не будут скомпилированы при сборке кросс-компилятора и не являются необходимыми для кросс-компиляции временной libc.

`--enable-languages ​​= c, c ++`    Эта опция гарантирует, что будут построены только компиляторы C и C ++. Это единственные языки, которые нужны сейчас. 

Далее скомпилируем пакет:

```bash
make
```

## Установка

Чтобы установить данный пакет, выполните:
```bash
make install 
```

Также создадим файл полную версию limits.h - заголовочнового файла в котором записаны лимиты

```bash
cd ..
cat gcc/limitx.h gcc/glimits.h gcc/limity.h > \
  `dirname $($LIN_TGT-gcc -print-libgcc-file-name)`/install-tools/include/limits.h
```
