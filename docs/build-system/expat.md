<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('expat');
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
./configure --prefix=/usr    \
            --disable-static \
```

## Сборка

```bash
make
```

## Тестирование

```bash
make -j1 check
```

## Установка

```bash
make install
```

## Установка документации

```bash
install -v -m644 doc/*.{html,png,css} /usr/share/doc/expat
```

## Для multilib

### Очистка

```bash
sed -e "/^am__append_1/ s/doc//" -i Makefile
make clean
```

### Настройка

```bash
CC="gcc -m32" ./configure \
    --prefix=/usr         \
    --libdir=/usr/lib32  \
    --host=i686-pc-linux-gnu
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
