<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('elfutils');
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
./configure --prefix=/usr                \
            --disable-debuginfod         \
            --enable-libdebuginfod=dummy
```

## Сборка

```bash
make
```

## Тестирование

```bash
make check
```

## Установка

Потребуется только установка библиотеки `libelf`.

```bash
make -C libelf install
install -vm644 config/libelf.pc /usr/lib/pkgconfig
rm /usr/lib/libelf.a
```

## Для multilib

### Очистка

```bash
make distclean
```

### Подготовка

```bash
CC="gcc -m32" ./configure \
    --prefix=/usr            \
    --libdir=/usr/lib32     \
    --host=i686-pc-linux-gnu \
    --disable-debuginfod     \
    --enable-libdebuginfod=dummy
```

### Сборка 

```bash
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR -C libelf install
install -vDm644 config/libelf.pc DESTDIR/usr/lib32/pkgconfig/libelf.pc
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
