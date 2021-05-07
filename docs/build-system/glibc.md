<package-info :package="package" showsbu2 ></package-info>

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
			getTzdata: function() {
					getPackage('tzdata)
					.then(response => this.tzdata = response);
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

<a :href="tzdata.url">{{ tzdata.url}}</a>

## Подготовка

Glibc по умолчанию использует не соответствующею стандарту FHS директорию `/var/db`. Для соответствия с FHS примените патч:

```bash
patch -Np1 -i ../glibc-2.33-fhs-1.patch
```

Исправьте ошибку:

```bash
sed -e '402a\      *result = local->data.services[database_index];' \
    -i nss/nss_database.c
```

В документации пакета {{package.name}} требуется использовать отдельную директорию для сборки:

```bash
mkdir  build
cd       build
```

## Настройка

```bash
../configure                             \
      --prefix=/usr                      \
      --disable-werror        \
      --enable-kernel=3.2                \
      --with-headers=/usr/include        \
      --libexecdir=/usr/lib              \
      libc_cv_slibdir=/lib                \
      libc_cv_include_x86_isa_level=no  
```

### Для MultiLib
Добавьте параметр `--enable-multi-arch`

### Объяснение параметров configure
 
`--enable-kernel=3.2` - оптимизирует glibc для использования с ядрами новее 3.2.

`--with-headers=/usr/include` - задает путь к заголовкам ядра.

`libc_cv_include_x86_isa_level=no` - исключает возможную ошибку.

## Сборка

```bash
make
```

## Тестирование

Вы можете запустить тесты выполнив:

```bash
make check
```

## Установка

Удалите предупреждение при установке и отключите запуск не нужных проверок:

```bash
touch /etc/ld.so.conf
sed '/test-installation/s@$(PERL)@echo not running@' -i ../Makefile
```

Установите пакет и файлы конфигурации для демона ``nscd``

```bash
make install
cp -v ../nscd/nscd.conf /etc/nscd.conf
mkdir -pv /var/cache/nscd
```

Если вы собираетесь использовать `systemd` установите соответствующие файлы для демона `nscd`:

```bash
install -v -Dm644 ../nscd/nscd.tmpfiles /usr/lib/tmpfiles.d/nscd.conf
install -v -Dm644 ../nscd/nscd.service /lib/systemd/system/nscd.service
```

Далее установите локали. Для этого выполните:

<!-- C.utf-8 лучше поставить -->

```bash
mkdir -pv /usr/lib/locale
localedef -i POSIX -f UTF-8 C.UTF-8 2> /dev/null || true
```

Также можете установить локаль для языка, на котором вы планируете использовать систему, выполнив команду из списка ниже:

```bash
localedef -i cs_CZ -f UTF-8 cs_CZ.UTF-8
localedef -i de_DE -f ISO-8859-1 de_DE
localedef -i de_DE@euro -f ISO-8859-15 de_DE@euro
localedef -i de_DE -f UTF-8 de_DE.UTF-8
localedef -i el_GR -f ISO-8859-7 el_GR
localedef -i en_GB -f UTF-8 en_GB.UTF-8
localedef -i en_HK -f ISO-8859-1 en_HK
localedef -i en_PH -f ISO-8859-1 en_PH
localedef -i en_US -f ISO-8859-1 en_US
localedef -i en_US -f UTF-8 en_US.UTF-8
localedef -i es_MX -f ISO-8859-1 es_MX
localedef -i fa_IR -f UTF-8 fa_IR
localedef -i fr_FR -f ISO-8859-1 fr_FR
localedef -i fr_FR@euro -f ISO-8859-15 fr_FR@euro
localedef -i fr_FR -f UTF-8 fr_FR.UTF-8
localedef -i it_IT -f ISO-8859-1 it_IT
localedef -i it_IT -f UTF-8 it_IT.UTF-8
localedef -i ja_JP -f EUC-JP ja_JP
localedef -i ja_JP -f SHIFT_JIS ja_JP.SIJS 2> /dev/null || true
localedef -i ja_JP -f UTF-8 ja_JP.UTF-8
localedef -i ru_RU -f KOI8-R ru_RU.KOI8-R
localedef -i ru_RU -f UTF-8 ru_RU.UTF-8
localedef -i tr_TR -f UTF-8 tr_TR.UTF-8
localedef -i zh_CN -f GB18030 zh_CN.GB18030
localedef -i zh_HK -f BIG5-HKSCS zh_HK.BIG5-HKSCS
```

## Настройка {{package.name}} 

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
tar -xf ../../{{tzdata.fileName}}

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

Обновите кеш библиотек:

```bash
ldconfig
```

## Для MultiLib

### Подготовка

Для MultiLib требуется установить 32-битную версию glibc.
Для этого, во первых удалите оставшиеся от 64-битной сборки glibc файлы:

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
      libc_cv_slibdir=/lib32 
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

Также добавьте запись в `ld.so.conf`:

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

<!-- Содрано с вашего перевода лфс и чуть поправлено -->

`catchsegv` - Может использоваться для создания трассировки стека, когда программа завершается с ошибкой сегментации

`gencat` - Создает каталоги сообщений

`getconf` - Отображает значения конфигурации системы для специфичных переменных файловой системы

`getent` - Получает записи из административной базы данных

`iconv` - Выполняет преобразование набора символов в другую кодировку

`iconvconfig` - Создает ускоренную загрузку iconv модулей файлов конфигурации

`ldconfig` - Настраивает привязки динамического компоновщика

`ldd` - помогает определить список разделяемых библиотек (shared libraries), от которых зависит программа.

`lddlibc4` - Помогает ldd с объектными файлами

`locale` - Отображает всевозможную информацию о текущей локали

`localedef` - Компилирует спецификации локали

`makedb` - Создает простую базу данных из текстового ввода

`mtrace` - Читает и интерпретирует файл трассировки памяти и отображает сводку в удобочитаемом формате

`nscd` - Служба (демон), которая предоставляет кэш для наиболее общих запросов службы имен.

`pldd` - Список динамических общих объектов, используемых запущенными процессами

`sln` - Статически слинкованная программа `ln`

`sotruss` - Выполняет трассировку вызовов процедуры разделяемой библиотеки для указанной команды

`sprof` - Считывает и отображает данные профилирования общих объектов

`tzselect` - Выясняет у пользователя его текущее местоположение и выводит описание часового пояса на устройство стандартного вывода.

`xtrace` - Трассировка выполняемой программы, и выводит в реальном времени на устройство стандартного вывода выполняемые функции

`zdump` Распечатывает текущее время для каждого часового пояса, указанного в командной строке

`zic` - Компилятор часовых поясов

`ld-2.30.so` - Программа выполняет поиск и загружает динамические библиотеки, необходимые программам, а также подготавливает программы к запуску и запускают их.

`libBrokenLocale` - Используется внутри Glibc как грубый хак, чтобы обработать запущенную сломанную программу (например некоторые приложения Motif). Изучите комментарии в файле `locale/broken_cur_max.c` для получения более подробной информации

`libSegFault` - Обработчик сигнала ошибки сегментации, используемый catchsegv

`libanl` - Асинхронная библиотека поиска имен

`libc` - Стандартная библиотека языка Си

`libcrypt` - Криптографическая библиотека

`libdl` - Интерфейс библиотеки динамической линковки

`libg` - Библиотека-заглушка, не содержащая функций. Раньше была библиотекой выполнения для g++

`libm` - Математическая библиотека

`libmcheck` - Включает проверку распределения памяти при линковке

`libmemusage` - Используется программой memusage чтобы помочь собрать информацию об использовании памяти в программе

`libnsl` - Библиотека сетевых сервисов

`libnss` - Библиотеки коммутаторов имен, содержащие функции для разрешение имен хостов, имен пользователей, имен групп, псевдонимов, служб,            протоколов и т.д.

`libpthread` - POSIX библиотека потоков

`libresolv` - Содержит функции для создания, отправки и интерпретации пакетов на серверы доменных имен в Интернете

`librt` - Содержит функции, обеспечивающие большую часть указанных интерфейсов в POSIX.1b расширении

`libthread_db` - Содержит функции, полезные для построения отладчиков для многопоточных программ

`libutil` - Содержит кл для «стандартных» функций, используемых в большинстве различных утилит Unix 
