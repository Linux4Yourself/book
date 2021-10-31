<pkg :name="'libcap'" instsize showsbu2></pkg>

## Подготовка

Отключите установку статических библиотек:

{{ include('../packages/libcap/prepare') }}

## Сборка

{{ include('../packages/libcap/build') }}

## Тестирование

{{ include('../packages/libcap/test') }}

## Установка

{{ include('../packages/libcap/install') }}

Установите корректные права для библиотек:

{{ include('../packages/libcap/postinstall') }}

## При раздельной структуре каталогов

Уберите `prefix=/usr` в сборке и установке.

{{ include('../packages/libcap/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/libcap/multi_prepare') }}

### Сборка

{{ include('../packages/libcap/multi_build') }}

### Установка

{{ include('../packages/libcap/multi_install') }}

## Установленные файлы

Программы: `capsh`, `getcap`, `getpcaps` и `setcap`

Библиотеки: `libcap.so` и `libpsx.so`

<script>
	new Vue({ el: '#main' })
</script>
