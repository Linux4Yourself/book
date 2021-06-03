<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('sqlite');
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
./configure --prefix=/usr     \
            --disable-static  \
            --enable-fts5     \
            CPPFLAGS="-DSQLITE_ENABLE_FTS3=1  \
            -DSQLITE_ENABLE_FTS4=1            \
            -DSQLITE_ENABLE_COLUMN_METADATA=1 \
            -DSQLITE_ENABLE_UNLOCK_NOTIFY=1   \
            -DSQLITE_ENABLE_DBSTAT_VTAB=1     \
            -DSQLITE_SECURE_DELETE=1          \
            -DSQLITE_ENABLE_FTS3_TOKENIZER=1" 
```

## Сборка


```bash
make
```

## Установка

```bash
make install
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" CXX="g++ -m32" \
CPPFLAGS="-DSQLITE_ENABLE_FTS3=1  \
          -DSQLITE_ENABLE_FTS4=1            \
          -DSQLITE_ENABLE_COLUMN_METADATA=1 \
          -DSQLITE_ENABLE_UNLOCK_NOTIFY=1   \
          -DSQLITE_ENABLE_DBSTAT_VTAB=1     \
          -DSQLITE_SECURE_DELETE=1          \
          -DSQLITE_ENABLE_FTS3_TOKENIZER=1" \
./configure --prefix=/usr     \
            --disable-static  \
            --enable-fts5              
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

Программы: sqlite3

Библиотеки: libsqlite3.so

