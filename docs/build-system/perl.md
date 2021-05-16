<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('perl');
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

Для использования системных версий `zlib` и `bzip2` вместо встроенных выполните:

```bash
export BUILD_ZLIB=False
export BUILD_BZIP2=0
```

Запустите скрипт `configure` (Для полного контроля над настройкой удалите опцию `-des`)

```bash
sh Configure -des                                         \
             -Dprefix=/usr                                \
             -Dvendorprefix=/usr                          \
             -Dprivlib=/usr/lib/perl5/5.32/core_perl      \
             -Darchlib=/usr/lib/perl5/5.32/core_perl      \
             -Dsitelib=/usr/lib/perl5/5.32/site_perl      \
             -Dsitearch=/usr/lib/perl5/5.32/site_perl     \
             -Dvendorlib=/usr/lib/perl5/5.32/vendor_perl  \
             -Dvendorarch=/usr/lib/perl5/5.32/vendor_perl \
             -Dman1dir=/usr/share/man/man1                \
             -Dman3dir=/usr/share/man/man3                \
             -Dpager="/usr/bin/less -isR"                 \
             -Duseshrplib                                 \
             -Dusethreads
```

### Объяснение параметров configure

`-Dvendorprefix=/usr` - Устанавливать модули в `/usr`.

`-Dpager="/usr/bin/less -isR"` - Использовать `less` вместо `more`.

`-Duseshrplib` - Установить динамическую библиотеку.

`-Dusethreads` - Использовать много-поточность.

## Сборка


```bash
make
```
## Тестирование

```bash
make test
```

## Установка

```bash
make install
unset BUILD_ZLIB BUILD_BZIP2
```


## Установленные файлы

Программы: `corelist, cpan, enc2xs, encguess, h2ph, h2xs, instmodsh, json_pp, libnetcfg, perl, perl5.32.1 (жесткая ссылка на perl), perlbug, perldoc, perlivp, perlthanks (жесткая ссылка на perlbug), piconv, pl2pm, pod2html, pod2man, pod2text, pod2usage, podchecker, podselect, prove, ptar, ptardiff, ptargrep, shasum, splain, xsubpp и zipdetails`

Библиотеки: Множество в директории `/usr/lib/perl5`

Директории: `/usr/lib/perl5`
