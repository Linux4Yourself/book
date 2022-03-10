{{ include('../packages/zstd/README.md') }}

## Подготовка

Примените патч:

```bash
patch -Np1 -i ../zstd-1.5.2-upstream_fixes-1.patch
```

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

Программы: zstd, zstdcat (ссылка на zstd), zstdgrep, zstdless, zstdmt (ссылка на zstd), and unzstd (ссылка на zstd)

Библиотеки: libzstd.so

### Краткое описание

`zstd` - Сжимает и распаковывает файлы с помощью алгоритма ZSTD

`libzstd` - библиотека для формата сжатия ZSTD


