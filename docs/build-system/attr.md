<pkg :name="'attr'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/attr/configure ':include')

## Сборка

[filename](../packages/attr/build ':include')

## Тестирование

???+ warning
	
	Тестирование нужно производить на файловой системе, поддерживающей расширенные атрибуты. Например, ext2-ext4.

[filename](../packages/attr/test ':include')

## Установка

[filename](../packages/attr/install ':include')

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

[filename](../packages/attr/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/attr/multi_prepare ':include')

### Настройка

[filename](../packages/attr/multi_configure ':include')

### Сборка

[filename](../packages/attr/multi_build ':include')

### Установка

[filename](../packages/attr/multi_install ':include')

## Установленные файлы

Программы: `attr`, `getfattr`, `setfattr`

Библиотеки: `libattr.so`

<script>
	new Vue({ el: '#main' })
</script>
