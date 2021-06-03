<package-info :package="package" instsize showsbu2></package-info>

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

## Настройка


```bash
./configure --prefix=/usr    \
            --disable-static 
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

Программы: lzcat (ссылка на xz), lzcmp (ссылка на xzdiff), lzdiff (ссылка на xzdiff), lzegrep (ссылка на xzgrep), lzfgrep (ссылка на xzgrep), lzgrep (ссылка на xzgrep), lzless (ссылка на xzless), lzma (ссылка на xz), lzmadec, lzmainfo, lzmore (ссылка на xzmore), unlzma (ссылка на xz), unxz (ссылка на xz), xz, xzcat (ссылка на xz), xzcmp (ссылка на xzdiff), xzdec, xzdiff, xzegrep (ссылка на xzgrep), xzfgrep (ссылка на xzgrep), xzgrep, xzless и xzmore

Библиотеки: liblzma.so

### Краткое описание

`lzcat` - Распаковывает в стандартный вывод

`lzcmp` - Запускает cmp для сжатых файлов LZMA

`lzdiff` - Запускает diff для сжатых файлов LZMA

`lzegrep` - Запускает egrep для сжатых файлов LZMA

`lzfgrep` - Запускает fgrep для сжатых файлов LZMA

`lzgrep` - Запускает grep для сжатых файлов LZMA

`lzless` - Работает меньше с файлами, сжатыми LZMA

`lzma` - Сжимает или распаковывает файлы с использованием формата LZMA

`lzmadec` - Небольшой и быстрый декодер для сжатых файлов LZMA

`lzmainfo` - Показывает информацию, хранящуюся в заголовке сжатого файла LZMA

`lzmore` - Работает больше с файлами, сжатыми LZMA

`unlzma` - Распаковывает файлы с использованием формата LZMA

`unxz` - Распаковывает файлы в формате XZ

`xz` - Сжимает или распаковывает файлы в формате XZ

`xzcat` - Распаковывает в стандартный вывод

`xzcmp` - Запускает cmp для сжатых файлов XZ

`xzdec` - Небольшой и быстрый декодер для сжатых файлов XZ

`xzdiff` - Запускает diff для сжатых файлов XZ

`xzegrep` - Запускает egrep для сжатых файлов XZ

`xzfgrep` - Запускает fgrep для сжатых файлов XZ

`xzgrep` - Запускает grep для сжатых файлов XZ

`xzless` - Работает меньше с файлами, сжатыми XZ

`xzmore` - Работает больше с файлами, сжатыми XZ

`liblzma` - Библиотека, реализующая сжатие данных без потерь с сортировкой по блокам с использованием цепного алгоритма Лемпеля-Зива-Маркова. 
