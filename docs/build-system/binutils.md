<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('binutils');
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

Удалите проблемный тест:

```bash
sed -i '/@\tincremental_copy/d' gold/testsuite/Makefile.in
```

В документации пакета {{package.name}} требуется использовать отдельную директорию для сборки:

```bash
mkdir -v build
cd       build
```

## Настройка


```bash
../configure --prefix=/usr       \
             --enable-gold       \
             --enable-ld=default \
             --enable-plugins    \
             --enable-shared     \
             --disable-werror    \
             --enable-64-bit-bfd \
             --with-system-zlib  
```

### Для multilib

Добавьте параметр `--enable-multilib`

### Объяснение параметров configure

`--enable-gold` - Установить компоновщик `gold`.

`--enable-ld=default` - Установить `ld` и `ld.bfd`.

`--enable-plugins` - Включает поддержку плагинов для компоновщика.

`--enable-64-bit-bfd` - Включает поддержку 64-битных систем.

`--with-system-zlib` - Использовать системную версию `zlib`, а не включенную в пакет.

## Сборка


```bash
make tooldir=/usr
```
## Тестирование

```bash
make -k check
```

## Установка

```bash
make tooldir=/usr install -j1
```
 
Удалите бесполезные статические библиотеки:

```bash
rm -fv /usr/lib/lib{bfd,ctf,ctf-nobfd,opcodes}.a
```

## Установленные файлы

Программы: addr2line, ar, as, c++filt, dwp, elfedit, gprof, ld, ld.bfd, ld.gold, nm, objcopy, objdump, ranlib, readelf, size, strings и strip

Библиотеки: libbfd.so, libctf.so, libctf-nobfd.so и libopcodes.so

Директории: /usr/lib/ldscripts
