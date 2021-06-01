<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('wget');
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
./configure --prefix=/usr --sysconfdir=/etc \
            --with-ssl=openssl
```

## Сборка

```bash
make
```

## Установка

```bash
make install
```

## Описание новых команд

* `--sysconfdir=/etc` - меняет путь к директории с настройками с `/usr/etc` на `/etc`
* `--with-ssl=openssl` - позволяет использовать openssl вместо GnuTLS.

## Конфигурационные файлы

* `/etc/wgetrc`
* `~/.wgetrc`

## Установленные файлы

* **Установленные программы:** `wget`
* **Установленные бибилиотеки:** нет
* **Установленные директории:** нет
