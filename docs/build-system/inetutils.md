<pkg :name="'inetutils'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/inetutils/configure') }}

### Значения параметров

`--disable-*` - отключает установку программ, лучшие версии которых предоставляют другие пакеты.

## Сборка

{{ include('../packages/inetutils/build') }}

## Тестирование

{{ include('../packages/inetutils/test') }}

???+ warning "Предупреждение"

    Тест `libls.sh` даёт сбой, когда система LX4 находится в среде chroot, а тест `ping-localhost.sh` не проходит, если в хост-системе нет поддержки IPv6.

## Установка

{{ include('../packages/inetutils/install') }}

## При раздельной структуре каталогов

{{ include('../packages/inetutils/cldirs') }}

## Установленные файлы

Программы: `dnsdomainname`, `ftp`, `ifconfig`, `hostname`, `ping`, `ping6`, `talk`, `telnet`, `tftp` и `traceroute`


