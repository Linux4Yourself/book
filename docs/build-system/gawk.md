{{ include('../packages/gawk/README.md') }}

## Подготовка

Следует убедиться, что ненужные файлы не будут установлены:

```bash 
{{ include('../packages/gawk/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/gawk/configure') }}
```

## Сборка

```bash 
{{ include('../packages/gawk/build') }}
```

## Тестирование

```bash 
{{ include('../packages/gawk/test') }}
```

## Установка

```bash 
{{ include('../packages/gawk/install') }}
```

## Установка документации

```bash 
{{ include('../packages/gawk/install-doc') }}
```

## Установленные файлы

**Программы:** `awk` (ссылка на `gawk`), `gawk` и `awk-5.1.1`

**Библиотеки:** `filefuncs.so`, `fnmatch.so`, `fork.so`, `inplace.so`, `intdiv.so`, `ordchr.so`, `readdir.so`, `readfile.so`, `revoutput.so`, `revtwoway.so`, `rwarray.so`, и `time.so` (все из них содержатся в директории `/usr/lib/gawk`)

**Директории:** `/usr/lib/gawk`, `/usr/libexec/awk`, `/usr/share/awk` и `/usr/share/doc/gawk`
