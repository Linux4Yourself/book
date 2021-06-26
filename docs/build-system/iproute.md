<pkg :name="'iproute2'" instsize showsbu2></pkg>

## Подготовка

- Программа `arpd` требует установленной Berkeley DB. Отключите её,
- Отключите 2 модуля требующих `iptables`,

<package-script :package="'iproute2'" :type="'prepare'"></package-script>

## Сборка

```bash
make
```

## Установка

```bash
make install
```

## Установка документации

```bash
mkdir -v /usr/share/doc/iproute2
cp -v COPYING README* /usr/share/doc/iproute2
```

## Установленные файлы

Программы: bridge, ctstat (ссылка на lnstat), genl, ifcfg, ifstat, ip, lnstat, nstat, routef, routel, rtacct, rtmon, rtpr, rtstat (ссылка на lnstat), ss, and tc

<script>
	new Vue({ el: '#main' })
</script>
