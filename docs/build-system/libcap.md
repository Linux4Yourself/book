<pkg :name="'libcap'" instsize showsbu2></pkg>

## Подготовка

Отключите установку статических библиотек:

[filename](../packages/core/libcap/prepare ':include')

## Сборка

[filename](../packages/core/libcap/build ':include')

## Тестирование

[filename](../packages/core/libcap/test ':include')

## Установка

[filename](../packages/core/libcap/install ':include')

Установите корректные права для библиотек:

[filename](../packages/core/libcap/postinstall ':include')

## При раздельной структуре каталогов

[filename](../packages/core/libcap/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/core/libcap/multi_prepare ':include')

### Сборка

[filename](../packages/core/libcap/multi_build ':include')

### Установка

[filename](../packages/core/libcap/multi_install ':include')

## Установленные файлы

Программы: `capsh`, `getcap`, `getpcaps` и `setcap`

Библиотеки: `libcap.so` и `libpsx.so`

<script>
	new Vue({ el: '#main' })
</script>
