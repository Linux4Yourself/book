{{ include('../packages/zlib-ng/README.md') }}

## Настройка

{{ include('../packages/zlib-ng/configure') }}

### Значения параметров

`--zlib-compat` - включает полную совместимость с API `zlib`.

`--native` - использовать все доступные для вашего процессора оптимизации.

## Сборка

{{ include('../packages/zlib-ng/build') }}

## Тестирование

{{ include('../packages/zlib-ng/test') }}

## Установка

{{ include('../packages/zlib-ng/install') }}

Удалите ненужную статическую библиотеку:

{{ include('../packages/zlib-ng/postinstall') }}

## При раздельной структуре каталогов

{{ include('../packages/zlib-ng/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/zlib-ng/multi_prepare') }}

### Настройка

{{ include('../packages/zlib-ng/multi_configure') }}

### Сборка

{{ include('../packages/zlib-ng/multi_build') }}

### Установка

{{ include('../packages/zlib-ng/multi_install') }}

Удалите ненужную статическую библиотеку:

{{ include('../packages/zlib-ng/multi_postinstall') }}

## Установленные файлы

Библиотеки:`libz.so`

### Краткое описание

`libz.so` - Содержит функции сжатия, используемые многими программами


