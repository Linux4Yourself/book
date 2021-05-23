<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('e2fsprogs');
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

В документации пакета {{package.name}} требуется использовать отдельную директорию для сборки:

```bash
mkdir -v build
cd       build
```

```bash
../configure --prefix=/usr           \
             --sysconfdir=/etc       \
             --enable-elf-shlibs     \
             --disable-libblkid      \
             --disable-libuuid       \
             --disable-uuidd         \
             --disable-fsck
```

### Значения параметров configure

``--enable-elf-shlibs``
Это создает общие библиотеки, которые используются некоторыми программами пакета.

``--disable-*``
Исключает установку библиотек libuuid и libblkid, службы uuidd,и fsck обертки, которые содержатся в пакете Util-Linux и являются более актуальными.


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

Пакет установит запакованный файл .info и не обновит системный файл dir. Распакуйте файл и обновите файл dir, выполнив следующую команду:

```bash
gunzip -v /usr/share/info/libext2fs.info.gz
install-info --dir-file=/usr/share/info/dir /usr/share/info/libext2fs.info
```

При необходимости создайте и установите дополнительную документацию выполненив следующие команды:

```bash
makeinfo -o      doc/com_err.info ../lib/et/com_err.texinfo
install -v -m644 doc/com_err.info /usr/share/info
install-info --dir-file=/usr/share/info/dir /usr/share/info/com_err.info
```
