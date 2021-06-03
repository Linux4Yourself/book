<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('iproute2');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

Программа `arpd` требует установленной Berkeley DB. Отключите её:

```bash
sed -i /ARPD/d Makefile
rm -fv man/man8/arpd.8
```

Также отключите 2 модуля требующих `iptables`:

```bash
sed -i 's/.m_ipt.o//' tc/Makefile
```

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
