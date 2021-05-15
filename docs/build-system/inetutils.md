<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('inetutils');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Настройка


```bash
./configure --prefix=/usr        \
            --localstatedir=/var \
            --disable-logger     \
            --disable-whois      \
            --disable-rcp        \
            --disable-rexec      \
            --disable-rlogin     \
            --disable-rsh        \
            --disable-servers
```

### Объяснение параметров configure

`--disable-*` - Отключает установку программ, лучшие версии которых предоставляют другие пакеты.

## Сборка


```bash
make
```
## Тестирование

```bash
make check
```

## Установка

```bash
make install
```
 
Переместите программу в правильное место:

```bash
mv -v /{,s}bin/ifconfig
```

## Установленные файлы

Программы: dnsdomainname, ftp, ifconfig, hostname, ping, ping6, talk, telnet, tftp и traceroute

