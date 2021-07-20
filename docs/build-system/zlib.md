<pkg :name="'zlib-ng'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'zlib-ng'" :type="'configure'"></package-script>

### Значения параметров

`--zlib-compat` - включает полную совместимость с API `zlib`.

`--native` - использовать все доступные для вашего процессора оптимизации.

## Сборка

[filename](../packages/zlib-ng/build ':include')

## Тестирование

[filename](../packages/zlib-ng/test ':include')

## Установка

[filename](../packages/zlib-ng/install ':include')

Удалите ненужную статическую библиотеку:

[filename](../packages/zlib-ng/postinstall ':include')

## При раздельной структуре каталогов

Переместите файлы в нужные директории:

[filename](../packages/zlib-ng/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/zlib-ng/multi_prepare ':include')

### Настройка

[filename](../packages/zlib-ng/multi_configure ':include')

### Сборка

[filename](../packages/zlib-ng/multi_build ':include')

### Установка

[filename](../packages/zlib-ng/multi_install ':include')

Удалите ненужную статическую библиотеку:

[filename](../packages/zlib-ng/multi_postinstall ':include')

## Установленные файлы

Библиотеки:`libz.so`

### Краткое описание

`libz.so` - Содержит функции сжатия, используемые многими программами

<script>
	new Vue({ el: '#main' })
</script>
