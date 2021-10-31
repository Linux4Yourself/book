{{ include('../packages/perl/README.md') }}

## Настройка

Для использования системных версий `zlib` и `bzip2` вместо встроенных выполните:

```bash 
{{ include('../packages/perl/prepare') }}
```

Запустите скрипт `configure` (Для полного контроля над настройкой удалите опцию `-des`)

```bash 
{{ include('../packages/perl/configure') }}
```

### Значения параметров

`-Dvendorprefix=/usr` - Устанавливать модули в `/usr`.

`-Dpager="/usr/bin/less -isR"` - использовать `less` вместо `more`.

`-Duseshrplib` - Установить динамическую библиотеку.

`-Dusethreads` - использовать многопоточность.

## Сборка

```bash 
{{ include('../packages/perl/build') }}
```

## Тестирование

```bash 
{{ include('../packages/perl/test') }}
```

> Тесты добавляют 11 SBU ко всему времени установки пакета.

## Установка

```bash 
{{ include('../packages/perl/install') }}
```

## Установленные файлы

Программы: `corelist, cpan, enc2xs, encguess, h2ph, h2xs, instmodsh, json_pp, libnetcfg, perl, perl5.32.1 (жёсткая ссылка на perl), perlbug, perldoc, perlivp, perlthanks (жёсткая ссылка на perlbug), piconv, pl2pm, pod2html, pod2man, pod2text, pod2usage, podchecker, podselect, prove, ptar, ptardiff, ptargrep, shasum, splain, xsubpp и zipdetails`

Библиотеки: Множество в директории `/usr/lib/perl5`

Директории: `/usr/lib/perl5`


