<pkg :name="'elfutils'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/core/elfutils/configure ':include')

## Сборка

[filename](../packages/core/elfutils/build ':include')

## Тестирование

[filename](../packages/core/elfutils/test ':include')

## Установка

Потребуется только установка библиотеки `libelf`.

[filename](../packages/core/elfutils/install ':include')

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--libdir=/lib`.

[filename](../packages/core/elfutils/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/core/elfutils/multi_prepare ':include')

### Подготовка

[filename](../packages/core/elfutils/multi_configure ':include')

### Сборка

[filename](../packages/core/elfutils/multi_build ':include')

### Установка

[filename](../packages/core/elfutils/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
