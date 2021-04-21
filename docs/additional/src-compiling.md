# Установка программ из исходных кодов в Linux

Linux-системы неразрывно связаны с концепцией GNU – проекта, поддерживающего и развивающего философию свободно распространяемого программного обеспечения (ПО), в том числе и в виде исходного кода. А поскольку систем на базе ядра Linux существует великое множество и разработчики дистрибутивов всегда для своих систем используют исходный код ПО при сборке комплектов утилит, пакетов, да и самого ядра, то, очевидно, что использование исходных кодов ПО — это неотъемлемый аспект в эксплуатации Linux-систем. По крайней мере, любому пользователю, достаточно хорошо освоившему UNIX-подобные системы, рано или поздно приходится сталкиваться со сборкой ПО из исходных кодов.

Но поскольку системы Linux, как правило, снабжены хранилищами пакетов (репозиториями), из которых происходит загрузка, установка и обновление ПО, то часто бывает так, что разработчики дистрибутива, которые и поддерживают репозитории, ещё не успели сформировать новые пакеты ПО, для которых уже выпущено обновление. В этом случае можно прибегнуть к самостоятельной сборке требуемых пакетов из исходного кода.

**Общий порядок сборки пакетов — утилита make**

Для облегчения сборки ПО из исходных кодов существует свободная утилита make. Она применяется во всех UNIX-подобных системах для подавляющего большинства утилит. При сборке пакета очень полезно изучать информацию, содержащуюся, как правило, в файлах README или INSTALL, входящих в пакет. В этих файлах разработчики ПО указывают инструкции и специфические мероприятия для успешной сборки пакетов. Здесь также можно найти и системные требования для работы ПО и описания необходимых зависимостей, без которых собрать пакет будет невозможно.

**Порядок сборки выглядит так:**

 - Распаковка архива, содержащего файлы исходного кода (обычно именно так «исходники» и распространяются).

 - Переход в директорию с распакованными исходными текстами.

 - Подготовка (конфигурирование) предстоящей сборки (указание директорий установки, сторонних библиотек, архитектуры, дополнительных компонентов и т.д.). Для этого обычно используются служебные скрипты.

- Непосредственно, сама сборка — команда make.

- Установка (распространение) построенного ПО — команда make install.



Ниже будет приведена эта процедура на примере пакета Zlib, 

Скачаем архив пакета:

```bash
wget https://zlib.net/zlib-1.2.11.tar.xz
```

Распаковка архива:

```bash
tar -xvf zlib-1.2.11.tar.xz
```

В результате в текущем каталоге появится еще один каталог, с распакованным пакетом. Перейдём в него

```bash
cd zlib-1.2.11
```

Для успешной сборки и работы пакета необходимо проверить существующую конфигурацию системы на наличие требуемых зависимостей, библиотек и настроек, а также сконфигурировать сборку, запустив соответствующий скрипт configure.

```bash
./configure
```

Подобные скрипты создаются разработчиками для облегчения процесса сборки/установки. 

Вывод этого скрипта показывает , готов ли данный пакет к сборке:

```bash
Checking for gcc...
Checking for shared library support...
Building shared library libz.so.1.2.11 with gcc.
Checking for size_t... Yes.
Checking for off64_t... Yes.
Checking for fseeko... Yes.
Checking for strerror... Yes.
Checking for unistd.h... Yes.
Checking for stdarg.h... Yes.
Checking whether to use vs[n]printf() or s[n]printf()... using vs[n]printf().
Checking for vsnprintf() in stdio.h... Yes.
Checking for return value of vsnprintf()... Yes.
Checking for attribute(visibility) support... Yes.
```

Изучив вывод скрипта configure, можно сделать вывод о том, стоит ли далее приступать к сборке пакета. Обычно о критических ошибках сообщается фразами «configure: error». Убедившись, что всё нормально, можно приступать к построению:

```bash
make
```

Далее в консоль будет направлен вывод, отображающий ход сборки:

```bash
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -I. -c -o example.o test/example.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o adler32.o adler32.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o crc32.o crc32.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o deflate.o deflate.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o infback.o infback.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o inffast.o inffast.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o inflate.o inflate.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o inftrees.o inftrees.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o trees.o trees.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o zutil.o zutil.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o compress.o compress.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o uncompr.o uncompr.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o gzclose.o gzclose.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o gzlib.o gzlib.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o gzread.o gzread.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -c -o gzwrite.o gzwrite.c
ar rc libz.a adler32.o crc32.o deflate.o infback.o inffast.o inflate.o inftrees.o trees.o zutil.o compress.o uncompr.o gzclose.o gzlib.o gzread.o gzwrite.o
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o example example.o -L. libz.a
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -I. -c -o minigzip.o test/minigzip.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o minigzip minigzip.o -L. libz.a
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/adler32.o adler32.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/crc32.o crc32.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/deflate.o deflate.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/infback.o infback.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/inffast.o inffast.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/inflate.o inflate.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/inftrees.o inftrees.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/trees.o trees.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/zutil.o zutil.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/compress.o compress.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/uncompr.o uncompr.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/gzclose.o gzclose.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/gzlib.o gzlib.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/gzread.o gzread.c
gcc -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN  -DPIC -c -o objs/gzwrite.o gzwrite.c
gcc -shared -Wl,-soname,libz.so.1,--version-script,zlib.map -O3 -fPIC -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o libz.so.1.2.11 adler32.lo crc32.lo deflate.lo infback.lo inffast.lo inflate.lo inftrees.lo trees.lo zutil.lo compress.lo uncompr.lo gzclose.lo gzlib.lo gzread.lo gzwrite.lo  -lc
rm -f libz.so libz.so.1
ln -s libz.so.1.2.11 libz.so
ln -s libz.so.1.2.11 libz.so.1
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o examplesh example.o -L. libz.so.1.2.11
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o minigzipsh minigzip.o -L. libz.so.1.2.11
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -I. -D_FILE_OFFSET_BITS=64 -c -o example64.o test/example.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o example64 example64.o -L. libz.a
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -I. -D_FILE_OFFSET_BITS=64 -c -o minigzip64.o test/minigzip.c
gcc -O3 -D_LARGEFILE64_SOURCE=1 -DHAVE_HIDDEN -o minigzip64 minigzip64.o -L. libz.a
```

После успешного окончания которого можно произвести установку пакета (от пользователя root):

```bash
make install
```

или при наличии - воспользоваться командой sudo (от обычного пользователя)

```bash
sudo make install
```

 Для изменения директории установки следует использовать опцию —prefix=каталог:

```bash
rm -f /usr/local/lib/libz.a
cp libz.a /usr/local/lib
chmod 644 /usr/local/lib/libz.a
cp libz.so.1.2.11 /usr/local/lib
chmod 755 /usr/local/lib/libz.so.1.2.11
rm -f /usr/local/share/man/man3/zlib.3
cp zlib.3 /usr/local/share/man/man3
chmod 644 /usr/local/share/man/man3/zlib.3
rm -f /usr/local/lib/pkgconfig/zlib.pc
cp zlib.pc /usr/local/lib/pkgconfig
chmod 644 /usr/local/lib/pkgconfig/zlib.pc
rm -f /usr/local/include/zlib.h /usr/local/include/zconf.h
cp zlib.h zconf.h /usr/local/include
chmod 644 /usr/local/include/zlib.h /usr/local/include/zconf.h
```
На этом сборка из исходных кодов и установка пакета zlib - успешно завершена.
