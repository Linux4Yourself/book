<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('xz');
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

Переустановка Readline приведет к переименованию старых библиотек в <имя библиотеки> .old. Хотя обычно это не проблема, в некоторых случаях это может вызвать ошибку в ldconfig. Этого можно избежать, выполнив следующие команды: 

```bash
sed -i '/MV.*old/d' Makefile.in
sed -i '/{OLDSUFF}/c:' support/shlib-install
```

## Настройка


```bash
./configure --prefix=/usr    \
            --disable-static \
            --with-curses  
```

### Объяснение параметров configure

`--with-curses` - Включает использование библиотеки `ncurses`

## Сборка


```bash
make SHLIB_LIBS="-lncursesw" 
```
## Тестирование

```bash
make check
```

## Установка

```bash
make SHLIB_LIBS="-lncursesw" install
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" ./configure \
    --prefix=/usr         \
    --disable-static      \
    --libdir=/usr/lib32   \
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

## Установленные файлы

Библиотеки: `libhistory.so` и `libreadline.so`

