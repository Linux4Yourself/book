<pkg :name="'zlib-ng'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'zlib-ng'" :type="'configure'"></package-script>

### Значения параметров

`--zlib-compat` - Включает полную совместимость с API `zlib`.

`--native` - Использовать все доступные для вашего процессора оптимизации.

## Сборка

[filename](../packages/core/zlib-ng/build ':include')

## Тестирование

[filename](../packages/core/zlib-ng/test ':include')

## Установка

[filename](../packages/core/zlib-ng/install ':include')

Удалите ненужную статическую библиотеку:

[filename](../packages/core/zlib-ng/postinstall ':include')

## При раздельной структуре каталогов

[filename](../packages/core/zlib-ng/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/core/zlib-ng/multi_prepare ':include')

### Настройка

[filename](../packages/core/zlib-ng/multi_configure ':include')

### Сборка

[filename](../packages/core/zlib-ng/multi_build ':include')

### Установка

[filename](../packages/core/zlib-ng/multi_install ':include')

Удалите ненужную статическую библиотеку:

[filename](../packages/core/zlib-ng/multi_postinstall ':include')

## Установленные файлы

Библиотеки:`libz.so`

### Краткое описание

`libz.so` - Содержит функции сжатия, используемые многими программами

<script>
	new Vue({ el: '#main' })
</script>
