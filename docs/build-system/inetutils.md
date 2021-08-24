<pkg :name="'inetutils'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/inetutils/configure ':include')

### Значения параметров

`--disable-*` - отключает установку программ, лучшие версии которых предоставляют другие пакеты.

## Сборка

[filename](../packages/inetutils/build ':include')

## Тестирование

[filename](../packages/inetutils/test ':include')

?> Тест `libls.sh` даёт сбой, когда система LX4 находится в среде chroot, а тест `ping-localhost.sh` не проходит, если в хост-системе нет поддержки IPv6.

## Установка

[filename](../packages/inetutils/install ':include')

## При раздельной структуре каталогов

[filename](../packages/inetutils/cldirs ':include')

## Установленные файлы

Программы: `dnsdomainname`, `ftp`, `ifconfig`, `hostname`, `ping`, `ping6`, `talk`, `telnet`, `tftp` и `traceroute`

<script>
	new Vue({ el: '#main' })
</script>
