<pkg :name="'acl'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/acl/configure ':include')

## Сборка

[filename](../packages/acl/build ':include')

## Установка

[filename](../packages/acl/install ':include')

## При раздельной структуры каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

[filename](../packages/acl/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/acl/multi_prepare ':include')

### Настройка

[filename](../packages/acl/multi_configure ':include')

### Сборка

[filename](../packages/acl/multi_build ':include')

### Установка

[filename](../packages/acl/multi_install ':include')

## Установленные файлы

Программы: `chacl`, `getfacl`, `setfacl`

Библиотеки: `libacl.so`

<script>
	new Vue({ el: '#main' })
</script>
