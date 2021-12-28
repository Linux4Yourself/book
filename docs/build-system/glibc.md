{{ include('../packages/glibc/README.md') }}

## Дополнительные необходимые файлы

{{ include('../packages/tzdata/.url') }}

## Подготовка

Исправьте обнаруженную проблему безопасности:

```bash
sed -e '/NOTIFY_REMOVED)/s/)/ \&\& data.attr != NULL)/' \
    -i sysdeps/unix/sysv/linux/mq_notify.c
```

Glibc по умолчанию использует несоответствующую стандарту FHS директорию `/var/db`. Для соответствия с FHS примените патч:

```bash
patch -Np1 -i ../glibc-2.34-fhs-1.patch
```

Пакет Glibc требует использовать отдельную директорию для сборки. Создайте её:

```bash
mkdir -v build
cd       build
```

## Настройка


Если вы собираете систему с раздельной структурой директорий, убедитесь, что утилиты `ldconfig` и `sln` установлены в `/usr/sbin`: 

```bash
echo "rootsbindir=/usr/sbin" > configparms
```

```bash
../configure                             \
      --prefix=/usr                      \
      --disable-werror                   \
      --enable-kernel=3.2                \
      --with-headers=/usr/include        \
      libc_cv_slibdir=/lib           
```
### Для multilib

Добавьте параметр `--enable-multi-arch`

### Значения параметров

`--enable-kernel=3.2` - оптимизирует glibc для использования с ядрами новее 3.2.

`--with-headers=/usr/include` - задаёт путь к заголовкам ядра.

## Сборка

```bash
make
```

## Тестирование

Создайте необходимую для тестирования ссылку:

```bash
ln -sfnv $PWD/elf/ld-linux-x86-64.so.2 /lib/
```

Вы можете запустить тесты, выполнив:

```bash
make check
```

Известно, что следующие тесты могут дать сбой:

- `io/tst-lchmod`, `misc/tst-ttyname` выдают ошибку в среде LX4;
- `elf/tst-cpu-features-cpuinfo` может дать сбой на некоторых архитектурах;
- `nss/tst-nss-files-hosts-multi` может потерпеть неудачу по пока неизвестным причинам;
- `rt/tst-cputimer{1,2,3}` сильно зависит от версии ядра. На старых ядрах (4.14.91–4.14.96, 4.19.13–4.19.18, и 4.20.0–4.20.5) известно, что тесты выдают ошибку;
- Математические тесты иногда терпят неудачу при работе на системах, где ЦП не является относительно новым процессором Intel или AMD.

## Установка

Удалите предупреждение при установке и отключите запуск ненужных проверок:

```bash
touch /etc/ld.so.conf
sed '/test-installation/s@$(PERL)@echo not running@' -i ../Makefile
```

Установите пакет и файлы конфигурации для демона `nscd`

```bash
make install
cp -v ../nscd/nscd.conf /etc/nscd.conf
mkdir -pv /var/cache/nscd
```

Если вы собираетесь использовать `systemd`, установите соответствующие файлы для демона `nscd`:

```bash
install -v -Dm644 ../nscd/nscd.tmpfiles /usr/lib/tmpfiles.d/nscd.conf
install -v -Dm644 ../nscd/nscd.service /lib/systemd/system/nscd.service
```

### Установка локали

Разные страны и культуры имеют различные соглашения для коммуникаций. Эти соглашения состоят как из очень простых, таких как форматы даты и времени, так и из более сложных, таких как разговорный язык. "Интернационализация" программ GNU работает с помощью локалей (locales).

Чтобы установить локали, выполните:

```bash
mkdir -pv /usr/lib/locale
localedef -i POSIX -f UTF-8 C.UTF-8 2> /dev/null || true
localedef -i en_US -f UTF-8 en_US.UTF-8
```

Чтобы установить локаль для языка, на котором вы планируете использовать систему, выберите из списка необходимую и выполните команду:

```bash
localedef -i cs_CZ -f UTF-8 cs_CZ.UTF-8
localedef -i de_DE -f ISO-8859-1 de_DE
localedef -i de_DE@euro -f ISO-8859-15 de_DE@euro
localedef -i de_DE -f UTF-8 de_DE.UTF-8
localedef -i el_GR -f ISO-8859-7 el_GR
localedef -i en_GB -f ISO-8859-1 en_GB
localedef -i en_GB -f UTF-8 en_GB.UTF-8
localedef -i en_HK -f ISO-8859-1 en_HK
localedef -i en_PH -f ISO-8859-1 en_PH
localedef -i en_US -f ISO-8859-1 en_US
localedef -i en_US -f UTF-8 en_US.UTF-8
localedef -i es_ES -f ISO-8859-15 es_ES@euro
localedef -i es_MX -f ISO-8859-1 es_MX
localedef -i fa_IR -f UTF-8 fa_IR
localedef -i fr_FR -f ISO-8859-1 fr_FR
localedef -i fr_FR@euro -f ISO-8859-15 fr_FR@euro
localedef -i fr_FR -f UTF-8 fr_FR.UTF-8
localedef -i is_IS -f ISO-8859-1 is_IS
localedef -i is_IS -f UTF-8 is_IS.UTF-8
localedef -i it_IT -f ISO-8859-1 it_IT
localedef -i it_IT -f ISO-8859-15 it_IT@euro
localedef -i it_IT -f UTF-8 it_IT.UTF-8
localedef -i ja_JP -f EUC-JP ja_JP
localedef -i ja_JP -f SHIFT_JIS ja_JP.SIJS 2> /dev/null || true
localedef -i ja_JP -f UTF-8 ja_JP.UTF-8
localedef -i nl_NL@euro -f ISO-8859-15 nl_NL@euro
localedef -i ru_RU -f KOI8-R ru_RU.KOI8-R
localedef -i ru_RU -f UTF-8 ru_RU.UTF-8
localedef -i se_NO -f UTF-8 se_NO.UTF-8
localedef -i ta_IN -f UTF-8 ta_IN.UTF-8
localedef -i tr_TR -f UTF-8 tr_TR.UTF-8
localedef -i zh_CN -f GB18030 zh_CN.GB18030
localedef -i zh_HK -f BIG5-HKSCS zh_HK.BIG5-HKSCS
localedef -i zh_TW -f UTF-8 zh_TW.UTF-8
```

вы можете установить все локали, которые содержатся в файле `localedata/SUPPORTED`.
Выполните следующую команду:

```bash
make localedata/install-locales
```

## Настройка

### nsswitch.conf

Создайте `nsswitch.conf`:

```bash
cat > /etc/nsswitch.conf << "EOF"
# Begin /etc/nsswitch.conf

passwd: files
group: files
shadow: files

hosts: files dns
networks: files

protocols: files
services: files
ethers: files
rpc: files

# End /etc/nsswitch.conf
EOF
```

### Установка tzdata

Установите информацию о часовых поясах:

```bash
tar -xf ../../{{ include('../packages/tzdata/.filename') }}

ZONEINFO=/usr/share/zoneinfo
mkdir -pv $ZONEINFO/{posix,right}

for tz in etcetera southamerica northamerica europe africa antarctica  \
          asia australasia backward; do
    zic -L /dev/null   -d $ZONEINFO       ${tz}
    zic -L /dev/null   -d $ZONEINFO/posix ${tz}
    zic -L leapseconds -d $ZONEINFO/right ${tz}
done

cp -v zone.tab zone1970.tab iso3166.tab $ZONEINFO
zic -d $ZONEINFO -p America/New_York
unset ZONEINFO
```

Для выбора часового пояса запустите скрипт:

```bash
tzselect
```

Для сохранения выбранного часового пояса выполните:

```bash
ln -sfv /usr/share/zoneinfo/< xxx> /etc/localtime
```

Где < xxx> - путь к вашему часовому поясу.

### ld.so.conf

Создайте файл `/etc/ld.so.conf`:

```bash
cat > /etc/ld.so.conf << "EOF"
# Begin /etc/ld.so.conf
/usr/local/lib
/opt/lib
include /etc/ld.so.conf.d/*.conf

EOF
mkdir -pv /etc/ld.so.conf.d
```

Обновите кэш библиотек:

```bash
ldconfig
```

## Для multilib

### Подготовка

Для multilib требуется установить 32-битную версию glibc.
Удалите оставшиеся от 64-битной сборки glibc файлы:

```bash
rm -rf ./*
find .. -name "*.a" -delete
```

### Настройка

```bash
CC="gcc -m32" CXX="g++ -m32" \
../configure                             \
      --prefix=/usr                      \
      --host=i686-pc-linux-gnu           \
      --build=$(../scripts/config.guess) \
      --enable-kernel=3.2                \
      --with-headers=/usr/include        \
      --enable-multi-arch                \
      --libdir=/usr/lib32                \
      --libexecdir=/usr/lib32            \
      libc_cv_slibdir=/usr/lib32
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$PWD/DESTDIR install
cp -a DESTDIR/lib32/*     /lib32/
cp -a DESTDIR/usr/lib32/* /usr/lib32/
install -vm644 DESTDIR/usr/include/gnu/{lib-names,stubs}-32.h \
               /usr/include/gnu/
ln -svf ../lib32/ld-linux.so.2 /lib/ld-linux.so.2
```

Добавьте запись в `ld.so.conf`:

```bash
echo "/usr/lib32" >> /etc/ld.so.conf
```

Обновите кеш библиотек:

```bash
ldconfig
```

## Установленные файлы

Программы: `catchsegv, gencat, getconf, getent, iconv, iconvconfig, ldconfig, ldd, lddlibc4, locale, localedef, makedb, mtrace, nscd, pcprofiledump, pldd, sln, sotruss, sprof, tzselect, xtrace, zdump, zic`

Библиотеки: ` ld-2.33.so, libBrokenLocale.{a,so}, libSegFault.so, libanl.{a,so}, libc.{a,so}, libc_nonshared.a, libcrypt.{a,so}, libdl.{a,so}, libg.a, libm.{a,so}, libmcheck.a, libmemusage.so, libmvec.{a,so}, libnsl.{a,so}, libnss_compat.so, libnss_dns.so, libnss_files.so, libnss_hesiod.so, libpcprofile.so, libpthread.{a,so}, libpthread_nonshared.a, libresolv.{a,so}, librt.{a,so}, libthread_db.so, libutil.{a,so}`

Директории: ` /usr/include/arpa, /usr/include/bits, /usr/include/gnu, /usr/include/net, /usr/include/netash, /usr/include/netatalk, /usr/include/netax25, /usr/include/neteconet, /usr/include/netinet, /usr/include/netipx, /usr/include/netiucv, /usr/include/netpacket, /usr/include/netrom, /usr/include/netrose, /usr/include/nfs, /usr/include/protocols, /usr/include/rpc, /usr/include/sys, /usr/lib/audit, /usr/lib/gconv, /usr/lib/locale, /usr/libexec/getconf, /usr/share/i18n, /usr/share/zoneinfo, /var/cache/nscd, /var/lib/nss_db`

### Краткое описание

`catchsegv` - Может использоваться для создания трассировки стека, когда программа завершается с ошибкой сегментации.

`gencat` - Создаёт каталоги сообщений.

`getconf` - Отображает значения конфигурации системы для специфичных переменных файловой системы.

`getent` - Получает записи из административной базы данных.

`iconv` - Выполняет преобразование набора символов в другую кодировку.

`iconvconfig` - Создает ускоренную загрузку iconv модулей файлов конфигурации.

`ldconfig` - Настраивает привязки динамического компоновщика.

`ldd` - помогает определить список разделяемых библиотек (shared libraries), от которых зависит программа.

`lddlibc4` - Помогает ldd с объектными файлами.

`locale` - Отображает всевозможную информацию о текущей локали.

`localedef` - Компилирует спецификации локали.

`makedb` - Создает простую базу данных из текстового ввода.

`mtrace` - Читает и интерпретирует файл трассировки памяти и отображает сводку в удобочитаемом формате.

`nscd` - Служба (демон), которая предоставляет кэш для наиболее общих запросов службы имен.

`pldd` - Список динамических общих объектов, используемых запущенными процессами.

`sln` - Статически слинкованная программа `ln`.

`sotruss` - Выполняет трассировку вызовов процедуры разделяемой библиотеки для указанной команды.

`sprof` - Считывает и отображает данные профилирования общих объектов.

`tzselect` - Выясняет у пользователя его текущее местоположение и выводит описание часового пояса на устройство стандартного вывода.

`xtrace` - Трассировка выполняемой программы, и выводит в реальном времени на устройство стандартного вывода выполняемые функции.

`zdump` Распечатывает текущее время для каждого часового пояса, указанного в командной строке.

`zic` - Компилятор часовых поясов.

`ld.so` - Программа выполняет поиск и загружает динамические библиотеки, необходимые программам, а также подготавливает программы к запуску и запускают их.

`libBrokenLocale` - Используется внутри Glibc как грубый хак, чтобы обработать запущенную сломанную программу (например некоторые приложения Motif). Изучите комментарии в файле `locale/broken_cur_max.c` для получения более подробной информации.

`libSegFault` - Обработчик сигнала ошибки сегментации, используемый catchsegv.

`libanl` - Асинхронная библиотека поиска имен.

`libc` - Стандартная библиотека языка Си.

`libcrypt` - Криптографическая библиотека.

`libdl` - Интерфейс библиотеки динамической линковки.

`libg` - библиотека-заглушка, не содержащая функций. Раньше была библиотекой выполнения для g++.

`libm` - Математическая библиотека.

`libmcheck` - включает проверку распределения памяти при линковке.

`libmemusage` - Используется программой memusage чтобы помочь собрать информацию об использовании памяти в программе.

`libnsl` - библиотека сетевых сервисов.

`libnss` - Библиотеки коммутаторов имен, содержащие функции для разрешение имен хостов, имен пользователей, имен групп, псевдонимов, служб, протоколов и т.д.

`libpthread` - POSIX библиотека потоков.

`libresolv` - Содержит функции для создания, отправки и интерпретации пакетов на серверы доменных имен в Интернете.

`librt` - Содержит функции, обеспечивающие большую часть указанных интерфейсов в POSIX.1b расширении.

`libthread_db` - Содержит функции, полезные для построения отладчиков для многопоточных программ.

`libutil` - Содержит ключи для «стандартных» функций, используемых в большинстве различных утилит Unix.
