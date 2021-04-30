<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('glibc');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
			getGlibc-patch: function() {
					getPackage('glibc-patch')
					.then(response => this.glibc-patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="glibc-patch.url">{{ glibc-patch.url}}</a>

## Сборка

Во первых необходимо создать две символические ссылки:

```bash
ln -sfv ../lib/ld-linux-x86-64.so.2 $LIN/lib64
ln -sfv ../lib/ld-linux-x86-64.so.2 $LIN/lib64/ld-lsb-x86-64.so.3
```

Первая ссылка используется GCC, вторую требует LSB.

Документация glibc по умолчанию использует не соответствующею FHS директорию `/var/db`. Для соответствия с FHS примените патч:

```bash
patch -Np1 -i ../glibc-2.33-fhs-1.patch
```

Документация glibc рекомендует использовать для сборки отдельную директорию:

```bash
mkdir  build
cd       build
```

Далее запустите скрипт `configure`: 

```bash
CFLAGS="-O2 -s" ../configure                             \
      --prefix=/usr                      \
      --host=$LIN_TGT                    \
      --build=$(../scripts/config.guess) \
      --enable-kernel=3.2                \
      --with-headers=$LIN/usr/include    \
      --libdir=/usr/lib                  \
      --libexecdir=/usr/lib              \
      libc_cv_slibdir=/lib                \
      libc_cv_include_x86_isa_level=no  \
      --disable-nscd  \
      --disable-timezone-tools
```

Для MultiLib добавьте параметр `--enable-multi-arch`

### Объяснение параметров configure

`CFLAGS="-O2 -s "` - исправляет возможную ошибку сборки

 `--host=$LIN_TGT    --build=$(../scripts/config.guess)` - необходимо для кросс-компиляции.
 
`--enable-kernel=3.2` - оптимизирует glibc для использования с ядром 3.2.

`--with-headers=$LIN/usr/include` - задает путь к заголовкам ядра.

`libc_cv_include_x86_isa_level=no` - исключает возможную ошибку.

` --disable-nscd   --disable-timezone-tools` - демон nscd и инструменты для управления часовыми поясами не нужны для временной glibc. 


Далее соберите этот пакет:

```bash
make
```

## Установка

Чтоб установить glibc выполните:

```bash
make DESTDIR=$LIN install
```

Также, окончите установку файла `limits.h`, запустив скрипт из состава GCC:

```bash
$LIN/tools/libexec/gcc/$LIN_TGT/11.1.0/install-tools/mkheaders
```

## Тестирование

Чтобы проверить правильность работы кросс-компилятора и libc выполните:

```bash
echo 'int main(){}' > dummy.c
$LIN_TGT-gcc dummy.c
readelf -l a.out | grep '/ld-linux'
```

Вывод должен быть таким:

```
[Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
```

Если все хорошо, удалите не нужные файлы:

```bash
rm -v dummy.c a.out
```

## Для MultiLib

Для MultiLib требуется установить 32-битную версию glibc.
Для этого, во первых удалите оставшиеся от 64-битной сборки glibc:

```bash
make clean
find .. -name "*.a" -delete
```

Далее запустите скрипт `configure`:

```bash
CC="$LIN_TGT-gcc -m32" \
CXX="$LIN_TGT-g++ -m32" \
../configure                             \
      --prefix=/usr                      \
      --host=$LIN_TGT32                  \
      --build=$(../scripts/config.guess) \
      --enable-kernel=3.2                \
      --with-headers=$LIN/usr/include    \
      --enable-multi-arch                \
      --libdir=/usr/lib32                \
      --libexecdir=/usr/lib32            \
      libc_cv_slibdir=/lib32  \
      libc_cv_include_x86_isa_level=no  \
      --disable-nscd  \
      --disable-timezone-tools
```

Соберите пакет:

```bash
make
```

Установите 32-битные библиотеки из этого пакета:

```bash
make DESTDIR=$PWD/DESTDIR install
cp -a DESTDIR/lib32/*     $LFS/lib32/
cp -a DESTDIR/usr/lib32 $LFS/usr/
install -vm644 DESTDIR/usr/include/gnu/{lib-names,stubs}-32.h \
               $LFS/usr/include/gnu/
ln -svf ../lib32/ld-linux.so.2 $LFS/lib/ld-linux.so.2
```

Чтобы проверить работоспособность 32-битной glibc выполните

```bash
echo 'int main(){}' > dummy.c
$LIN_TGT-gcc -m32 dummy.c
readelf -l a.out | grep '/ld-linux'
```

Вывод должен быть такой:

```
[Requesting program interpreter: /lib/ld-linux.so.2]
```

Если все хорошо, удалите не нужные файлы:

```bash
rm -v dummy.c a.out
```
