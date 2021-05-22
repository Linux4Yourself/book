<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('eudev');
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
./configure --prefix=/usr           \
            --sysconfdir=/etc       \
            --enable-manpages       \
            --disable-static
```

## Сборка


```bash
make
```

Создайте необходимые директории:

```bash
mkdir -pv /usr/lib/udev/rules.d
mkdir -pv /etc/udev/rules.d
```

## Тестирование

```bash
make check
```

## Установка

```bash
make install
```

Установите необходимые файлы:

<!-- TODO: добавить в шапку ссылку на это -->

```bash
tar -xvf ../udev-lfs-20171102.tar.xz
make -f udev-lfs-20171102/Makefile.lfs install
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" \
./configure --host=i686-pc-linux-gnu       \
            --prefix=/usr                  \
            --bindir=/usr/sbin             \
            --libdir=/usr/lib32            \
            --sysconfdir=/etc              \
            --disable-manpages             \
            --disable-static               \
            --config-cache
```

### Сборка 

```bash
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
