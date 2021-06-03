<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('libtool');
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
./configure --prefix=/usr
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

```bash
make install
```

Удалите ненужную статическую библиотеку

```bash
rm -fv /usr/lib/libltdl.a
```


## Для multilib

## Очистка

```bash
make distclean
```

## Настройка

```bash
CC="gcc -m32" ./configure \
    --prefix=/usr         \
    --libdir=/usr/lib32  \
    --host=i686-pc-linux-gnu
```
## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
