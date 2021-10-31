<pkg :name="'zstd'" instsize showsbu2></pkg>

## Сборка

{{ include('../packages/zstd/build') }}

## Тестирование

{{ include('../packages/zstd/test') }}

## Установка

{{ include('../packages/zstd/install') }}

## При раздельной структуре каталогов

{{ include('../packages/zstd/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/zstd/multi_prepare') }}

### Сборка

{{ include('../packages/zstd/multi_build') }}

### Установка

{{ include('../packages/zstd/multi_install') }}

## Установленные файлы

Программы: zstd, zstdcat (link to zstd), zstdgrep, zstdless, zstdmt (ссылка на zstd), and unzstd (ссылка на zstd)

Библиотеки: libzstd.so

### Краткое описание

`zstd` - Сжимает и распаковывает файлы с помощью алгоритма ZSTD

`libzstd` - библиотека для формата сжатия ZSTD

<script>
	new Vue({ el: '#main' })
</script>
