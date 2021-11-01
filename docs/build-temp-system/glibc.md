{{ include('../packages/glibc/README.md') }}

## Настройка

Необходимо создать две символические ссылки:

```bash
ln -sfv ../lib/ld-linux-x86-64.so.2 $LIN/lib64
ln -sfv ../lib/ld-linux-x86-64.so.2 $LIN/lib64/ld-lsb-x86-64.so.3
```

Первая ссылка используется GCC, вторую требует LSB.

В пакете Glibc по умолчанию используется несоответствующая стандаруту FHS директория `/var/db`. Для исправления этого примените патч:

```bash
patch -Np1 -i ../glibc-2.33-fhs-1.patch
```

Пакет Glibc требует использовать отдельную директорию для сборки. Создайте её:

```bash
mkdir  build
cd     build
```

Запустите скрипт `configure`:

```bash
 ../configure                            \
      --prefix=/usr                      \
      --host=$LIN_TGT                    \
      --build=$(../scripts/config.guess) \
      --enable-kernel=3.2                \
      --with-headers=$LIN/usr/include    \
      libc_cv_slibdir=/lib               \
      --disable-nscd                     \
      --disable-timezone-tools
```

### Для multilib

Добавьте параметр `--enable-multi-arch`

### Значения параметров

`--host=$LIN_TGT, --build=$(../scripts/config.guess)` - необходимо для кросс-компиляции.

`--enable-kernel=3.2` - оптимизирует glibc для использования с ядрами новее 3.2.

`--with-headers=$LIN/usr/include` - задает путь к заголовкам ядра.


` --disable-nscd, --disable-timezone-tools` - демон nscd и инструменты для управления часовыми поясами не нужны для временной glibc.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

Завершите установку файла `limits.h`, запустив скрипт из состава GCC:

```bash
$LIN/tools/libexec/gcc/$LIN_TGT/11.2.0/install-tools/mkheaders
```

## Тестирование

???+ warning "Предупреждение"
	 На данном этапе необходимо убедиться, что установленные ранее пакеты работают правильно. Внимательно изучите результаты вывода команд, и проверьте, что они строго соответствуют результатам вывода, приведенным ниже. Если есть несоответствия, значит инструкции на предыдущих этапах были выполнены некорректно.

### Чтобы проверить правильность работы кросс-компилятора и libc, выполните:

```bash
echo 'int main(){}' > dummy.c
$LIN_TGT-gcc dummy.c
readelf -l a.out | grep '/ld-linux'
```

#### Вывод должен быть таким:

```
[Requesting program interpreter: /lib64/ld-linux-x86-64.so.2]
```

#### Если все хорошо, удалите ненужные файлы:

```bash
rm -v dummy.c a.out
```

## Для multilib

Для MultiLib требуется установить 32-битную версию glibc.
Для этого, удалите оставшиеся файлы от 64-битной сборки glibc:

### Настройка

```bash
rm -rf ./*
find .. -name "*.a" -delete
```

Запустите скрипт `configure`:

```bash
CC="$LIN_TGT-gcc -m32"                   \
CXX="$LIN_TGT-g++ -m32"                  \
../configure                             \
      --prefix=/usr                      \
      --host=$LIN_TGT32                  \
      --build=$(../scripts/config.guess) \
      --enable-kernel=3.2                \
      --with-headers=$LIN/usr/include    \
      --enable-multi-arch                \
      --libdir=/usr/lib32                \
      --libexecdir=/usr/lib32            \
      libc_cv_slibdir=/lib32             \
      --disable-nscd                     \
      --disable-timezone-tools
```

### Сборка

```bash
make
```

### Установка

Установите 32-битные библиотеки из этого пакета:

```bash
make DESTDIR=$PWD/DESTDIR install
cp -a DESTDIR/lib32/*     $LIN/lib32/
cp -a DESTDIR/usr/lib32 $LIN/usr/
install -vm644 DESTDIR/usr/include/gnu/{lib-names,stubs}-32.h \
               $LIN/usr/include/gnu/
ln -svf ../lib32/ld-linux.so.2 $LIN/lib/ld-linux.so.2
```

### Проверка работоспособности

Чтобы проверить работоспособность 32-битной glibc, выполните:

```bash
echo 'int main(){}' > dummy.c
$LIN_TGT-gcc -m32 dummy.c
readelf -l a.out | grep '/ld-linux'
```

Вывод должен быть таким:

```
[Requesting program interpreter: /lib/ld-linux.so.2]
```

Если всё хорошо, удалите ненужные файлы:

```bash
rm -v dummy.c a.out
```
