<pkg :name="'iproute2'" instsize showsbu2></pkg>

## Подготовка

- Программа `arpd` требует установленную Berkeley DB. Отключите её,
- Отключите 2 модуля, требующие `iptables`,

<package-script :package="'iproute2'" :type="'prepare'"></package-script>

## Сборка

<package-script :package="'iproute2'" :type="'build'"></package-script>

## Установка

<package-script :package="'iproute2'" :type="'install'"></package-script>

## Установка документации

<package-script :package="'iproute2'" :type="'install-doc'"></package-script>
## Установленные файлы

Программы: bridge, ctstat (ссылка на lnstat), genl, ifcfg, ifstat, ip, lnstat, nstat, routef, routel, rtacct, rtmon, rtpr, rtstat (ссылка на lnstat), ss, and tc


