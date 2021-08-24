<pkg :name="'elfutils'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/elfutils/configure ':include')

## Сборка

[filename](../packages/elfutils/build ':include')

## Тестирование

[filename](../packages/elfutils/test ':include')

## Установка

Потребуется только установка библиотеки `libelf`.

[filename](../packages/elfutils/install ':include')

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--libdir=/lib`.

[filename](../packages/elfutils/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/elfutils/multi_prepare ':include')

### Подготовка

[filename](../packages/elfutils/multi_configure ':include')

### Сборка

[filename](../packages/elfutils/multi_build ':include')

### Установка

[filename](../packages/elfutils/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
