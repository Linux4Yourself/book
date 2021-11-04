{{ include('../packages/zstd/README.md') }}

## Сборка

```bash 
{{ include('../packages/zstd/build') }}
```

## Тестирование

```bash 
{{ include('../packages/zstd/test') }}
```

## Установка

```bash 
{{ include('../packages/zstd/install') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/zstd/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/zstd/multi_prepare') }}
```

### Сборка

```bash 
{{ include('../packages/zstd/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/zstd/multi_install') }}
```

## Установленные файлы

Программы: zstd, zstdcat (link to zstd), zstdgrep, zstdless, zstdmt (ссылка на zstd), and unzstd (ссылка на zstd)

Библиотеки: libzstd.so

### Краткое описание

`zstd` - Сжимает и распаковывает файлы с помощью алгоритма ZSTD

`libzstd` - библиотека для формата сжатия ZSTD


