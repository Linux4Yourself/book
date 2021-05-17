<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('kmod');
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
./configure --prefix=/usr          \
            --sysconfdir=/etc      \
            --with-xz              \
            --with-zstd            \
            --with-zlib
```

## Объяснение параметров configure
``--with-xz, --with-zlib, --with-zstd``

Параметры позволяют `Kmod` обрабатывать сжатые модули ядра соответствующим алгоритмом сжатия.


## Сборка

```bash
make
```

## Тестирование

Пакет не имеет тестов которые можно запустить непосредственно сейчас. Необходимо дополнительно установить `git`, при этом, некоторые тесты также не будут выполнены вне репозитория.


## Установка

```bash
make install
```

Необходимо создать символические ссылки (симлинки) для совместимости с `Module-Init-Tools` (Предыдущая реализация программы обработки модулей ядра):

```bash

for target in depmod insmod lsmod modinfo modprobe rmmod; do
  ln -sfv ../bin/kmod /sbin/$target
done

ln -sfv kmod /bin/lsmod
```

## Для multilib

### Очистка

Очистите предыдущую сборку, но сохраните страницы руководства, так как они не могут быть воссозданы, поскольку пакет `xsltproc` не установлен:

```bash
sed -e "s/^CLEANFILES =.*/CLEANFILES =/" -i man/Makefile
make clean
```

### Подготовка

```bash
CC="gcc -m32" ./configure \
    --prefix=/usr                 \
    --bindir=/bin                 \
    --libdir=/usr/lib32          \
    --sysconfdir=/etc             \
    --with-xz                     \
    --with-zlib                   \
    --host=i686-pc-linux-gnu      \
    --with-rootlibdir=/usr/lib32
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
