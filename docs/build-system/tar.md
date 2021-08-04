<pkg :name="'tar'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/core/tar/configure ':include')

## Сборка

[filename](../packages/core/tar/build ':include')

## Тестирование

[filename](../packages/core/tar/test ':include')

> Тестирование добавляет 3 SBU ко всему времени установки пакета

?> Известно, что тест `store/restore` даёт сбой.

## Установка

[filename](../packages/core/tar/install ':include')

## При раздельной структуре каталогов

Добавьте к скрипту `configure` ключ `--bindir=/bin`.

<script>
	new Vue({ el: '#main' })
</script>
