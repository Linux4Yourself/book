{{ include('../packages/gettext/README.md') }}

## Настройка

```bash 
{{ include('../packages/gettext/configure') }}
```

## Сборка

```bash 
{{ include('../packages/gettext/build') }}
```

## Тестирование

```bash 
{{ include('../packages/gettext/test') }}
```

> Тестирование добавляет +3 SBU ко всему времени установки пакета.

## Установка

```bash 
{{ include('../packages/gettext/install') }}
```

## Установленные файлы

**Программы:** `autopoint`, `envsubst`, `gettext`, `gettext.sh`, `gettextize`, `msgattrib`, `msgcat`, `msgcmp`, `msgcomm`, `msgconv`, `msgen`, `msgexec`, `msgfilter`, `msgfmt`, `msggrep`, `msginit`, `msgmerge`, `msgunfmt`, `msguniq`, `ngettext`, `recode-sr-latin`, и `xgettext`

**Библиотеки:** `libasprintf.so`, `libgettextlib.so`, `libgettextpo.so`, `libgettextsrc.so`, `libtextstyle.so`, и `preloadable_libintl.so`

**Директории:** `/usr/lib/gettext`, `/usr/share/doc/gettext`, `/usr/share/gettext`
