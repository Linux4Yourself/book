<pkg :name="'attr'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/core/attr/configure ':include')

## Сборка

[filename](../packages/core/attr/build ':include')

## Тестирование

!> Тестирование нужно производить на файловой системе, поддерживающей расширенные атрибуты. Например, ext2-ext4.

[filename](../packages/core/attr/test ':include')

## Установка

[filename](../packages/core/attr/install ':include')

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

[filename](../packages/core/attr/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/core/attr/multi_prepare ':include')

### Настройка

[filename](../packages/core/attr/multi_configure ':include')

### Сборка

[filename](../packages/core/attr/multi_build ':include')

### Установка

[filename](../packages/core/attr/multi_install ':include')

## Установленные файлы

Программы: `attr`, `getfattr`, `setfattr`

Библиотеки: `libattr.so`

<script>
	new Vue({ el: '#main' })
</script>
