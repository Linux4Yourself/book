<package-info :package="package" instsize showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('eudev');
				this.getBzipPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getBzipPatch: function() {
					getPackage('udev')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Настройка


```bash
./configure --prefix=/usr           \
            --sysconfdir=/etc       \
            --enable-manpages       \
            --disable-static        \
            --sbindir=/usr/bin 
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

<pre class="pre">
mkdir udev
cd udev
tar -xvf ../../{{patch.fileName}}
make install
cd ..
</pre>
 
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
rm -rf DESTDIR/usr/lib32/udev
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
