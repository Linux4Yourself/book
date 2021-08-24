<pkg :name="'libcap'" instsize showsbu2></pkg>

## Подготовка

Отключите установку статических библиотек:

[filename](../packages/libcap/prepare ':include')

## Сборка

[filename](../packages/libcap/build ':include')

## Тестирование

[filename](../packages/libcap/test ':include')

## Установка

[filename](../packages/libcap/install ':include')

Установите корректные права для библиотек:

[filename](../packages/libcap/postinstall ':include')

## При раздельной структуре каталогов

Уберите `prefix=/usr` в сборке и установке.

[filename](../packages/libcap/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/libcap/multi_prepare ':include')

### Сборка

[filename](../packages/libcap/multi_build ':include')

### Установка

[filename](../packages/libcap/multi_install ':include')

## Установленные файлы

Программы: `capsh`, `getcap`, `getpcaps` и `setcap`

Библиотеки: `libcap.so` и `libpsx.so`

<script>
	new Vue({ el: '#main' })
</script>
