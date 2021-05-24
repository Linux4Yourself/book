<package-info :package="package" showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('bzip2');
				this.getBzipPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getBzipPatch: function() {
					getPackage('bzip2-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч для правильной установки документации:

<pre class="pre">
patch -Np1 -i ../{{patch.fileName}}
</pre>

Убедитесь, что будут созданны относительные символические ссылки:

```bash
sed -i 's@\(ln -s -f \)$(PREFIX)/bin/@\1@' Makefile
```

Исправьте путь установки man-страниц:

```bash
sed -i "s@(PREFIX)/man@(PREFIX)/share/man@g" Makefile
```

## Сборка

Для сборки динамической библиотеки `libbz2.so` выполните:

```bash
make -f Makefile-libbz2_so
make clean
```

Далее соберите сам пакет:

```bash
make
```

## Установка

```bash
make PREFIX=/usr install
cp -v bzip2-shared /bin/bzip2
cp -av libbz2.so* /lib
ln -sv libbz2.so.1.0 /usr/lib/libbz2.so
rm -v /usr/bin/{bunzip2,bzcat}
ln -sv bzip2 /bin/bunzip2
ln -sv bzip2 /bin/bzcat
```
 
## Для multilib

### Очистка

```bash
make clean
```

### Сборка 

```bash
sed -e "s/^CC=.*/CC=gcc -m32/" -i Makefile{,-libbz2_so}
make -f Makefile-libbz2_so
make libbz2.a
```

### Установка

```bash
install -Dm755 libbz2.so.1.0.8 /usr/lib32/libbz2.so.1.0.8
ln -sf libbz2.so.1.0.8 /usr/lib32/libbz2.so
ln -sf libbz2.so.1.0.8 /usr/lib32/libbz2.so.1
ln -sf libbz2.so.1.0.8 /usr/lib32/libbz2.so.1.0
install -Dm644 libbz2.a /usr/lib32/libbz2.a
```

## Установленные файлы

Программы: bunzip2 (ссылка на bzip2), bzcat (ссылка на bzip2), bzcmp (ссылка на bzdiff), bzdiff, bzegrep (ссылка на bzgrep), bzfgrep (ссылка на bzgrep), bzgrep, bzip2, bzip2recover, bzless (ссылка на bzmore), и bzmore

Библиотеки: libbz2.so

### Краткое описание

`bunzip2` - Распаковывает файлы в формате bzip

`bzcat` - Распаковывает в стандартный вывод

`bzcmp` - Запускает cmp для файлов, сжатых с помощью bzip

`bzdiff` - Запускает diff для файлов, сжатых с помощью bzip

`Bzegrep` - Запускает egrep для файлов, сжатых с помощью bzip

`bzfgrep` - Запускает fgrep для файлов, сжатых с помощью bzip

`bzgrep` - Запускает grep для файлов, сжатых с помощью bzip

`bzip2` - Сжимает файлы, используя алгоритм сжатия текста сортировки блоков Барроуза-Уиллера с кодированием Хаффмана; степень сжатия лучше, чем достигается более традиционными компрессорами, использующими алгоритмы «Lempel-Ziv», такие как gzip

`bzip2recover` - Пытается восстановить данные из поврежденных bzip-файлов

`bzless` - Работает меньше с файлами, сжатыми с помощью bzip

`bzmore` - Работает больше с файлами, сжатыми с помощью bzip

`libbz2` - Библиотека, реализующая сжатие данных без потерь с сортировкой по блокам с использованием алгоритма Берроуза-Уиллера. 
