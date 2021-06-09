# Создание файла /etc/fstab

Fstab (сокр. от англ. file systems table) — один из конфигурационных файлов, который содержит информацию о различных файловых системах и устройствах хранения информации компьютера, описывает, как диск будет использоваться или как будет интегрирован в систему. Файл /etc/fstab делает возможным автоматическое монтирование определенных файловых систем, что особенно нужно при загрузке системы. Он содержит ряд строк, описывающих файловые системы, их точки монтирования и другие параметры. 

Строки содержат, по порядку:

- устройство монтируемой файловой системы;

- точку монтирования;

- тип файловой системы;

- параметры монтирования;

- флаг для dump, утилиты создания резервных копий;

- Порядок проверки для fsck (File System ChecK).

Здесь всегда есть запись о корневой файловой системе. Раздел swap является специальным, поэтому его не видно в древовидной структуре и в поле точки монтирования для таких разделов всегда содержится ключевое слово swap.


Создадим новый файл

```bash
cat > /etc/fstab << "EOF"
# Begin /etc/fstab

# file system  mount-point  type     options             dump  fsck
#                                                              order

/dev/<xxx>     /            <fff>    defaults            1     1
/dev/<yyy>     swap         swap     pri=1               0     0

# End /etc/fstab
EOF
```

Замените `<xxx>`, `<yyy>` и `<fff>` значениями, подходящими для системы, например `sda2`, `sda5` и `ext4`.

Файловым системам MS-DOS или Windows (vfat, ntfs, smbfs, cifs, iso9660, udf) требуется специальный параметр utf8, чтобы символы, не входящие в ASCII, в именах файлов интерпретировались должным образом. Для языковых стандартов, отличных от UTF-8, значение iocharset должно быть установлено таким же, как набор символов языкового стандарта, настроенного таким образом, чтобы ядро ​​его понимало. Это работает, если соответствующее определение набора символов (находится в ` File systems -> Native Language Support` при настройке ядра) было скомпилировано в ядро ​​или построено как модуль. Однако, если набор символов локали - UTF-8, соответствующий параметр iocharset = utf8 сделает файловую систему чувствительной к регистру. Чтобы исправить это, используйте специальный параметр utf8 вместо iocharset = utf8 для локалей UTF-8. Параметр «codepage» также необходим для файловых систем vfat и smbfs. Он должен быть установлен на номер кодовой страницы, используемый в MS-DOS в вашей стране. Например, чтобы смонтировать USB-накопители, пользователю ru_RU.KOI8-R потребуется следующее в части параметров его строки монтирования в ``/etc/fstab``:

```bash
noauto,user,quiet,showexec,codepage=866,iocharset=koi8r
```

Соответствующий фрагмент опций для пользователей ru_RU.UTF-8:

```bash
noauto,user,quiet,showexec,codepage=866,utf8
```

Обратите внимание, что использование `iocharset` является значением по умолчанию для `iso8859-1` (что делает файловую систему нечувствительной к регистру), а опция `utf8` указывает ядру преобразовать имена файлов с использованием `UTF-8`, чтобы их можно было интерпретировать в локали UTF-8.


Можно сделать файловую систему ext3 надежной при сбоях питания для некоторых типов жестких дисков. Для этого добавьте параметр монтирования `barrier=1` в соответствующую запись в ``/etc/fstab``. Чтобы проверить, поддерживает ли диск этот параметр, запустите ``hdparm`` на соответствующем диске:

```bash
hdparm -I /dev/sda | grep NCQ
```

Если результат будет пустой - данная опция не поддерживается.