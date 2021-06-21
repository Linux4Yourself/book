<pkg :name="'perl'" instsize showsbu2></pkg>

## Настройка

Для использования системных версий `zlib` и `bzip2` вместо встроенных выполните:

<package-script :package="'perl'" :type="'prepare'"></package-script>

Запустите скрипт `configure` (Для полного контроля над настройкой удалите опцию `-des`)

<package-script :package="'perl'" :type="'configure'"></package-script>

### Значения параметров

`-Dvendorprefix=/usr` - Устанавливать модули в `/usr`.

`-Dpager="/usr/bin/less -isR"` - Использовать `less` вместо `more`.

`-Duseshrplib` - Установить динамическую библиотеку.

`-Dusethreads` - Использовать много-поточность.

## Сборка
<package-script :package="'perl'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'perl'" :type="'test'"></package-script>

> Тесты добавляют 11 SBU ко всему времени установки пакета.

## Установка
<package-script :package="'perl'" :type="'install'"></package-script>
 
## Установленные файлы

Программы: `corelist, cpan, enc2xs, encguess, h2ph, h2xs, instmodsh, json_pp, libnetcfg, perl, perl5.32.1 (жесткая ссылка на perl), perlbug, perldoc, perlivp, perlthanks (жесткая ссылка на perlbug), piconv, pl2pm, pod2html, pod2man, pod2text, pod2usage, podchecker, podselect, prove, ptar, ptardiff, ptargrep, shasum, splain, xsubpp и zipdetails`

Библиотеки: Множество в директории `/usr/lib/perl5`

Директории: `/usr/lib/perl5`

<script>
	new Vue({ el: '#main' })
</script> 
