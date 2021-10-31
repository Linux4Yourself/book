<pkg :name="'dbus'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/dbus/configure') }}

## Сборка

{{ include('../packages/dbus/build') }}

## Тестирование

{{ include('../packages/dbus/test') }}

## Установка

{{ include('../packages/dbus/install') }}

Создайте символическую ссылку, чтобы `systemd` и `D-Bus` использовали один и тот же файл `machine-id`:

{{ include('../packages/dbus/postinstall') }}

## При раздельной структуре каталогов

{{ include('../packages/dbus/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/dbus/multi_prepare') }}

### Настройка

{{ include('../packages/dbus/multi_configure') }}

### Сборка

{{ include('../packages/dbus/multi_build') }}

### Установка

{{ include('../packages/dbus/multi_install') }}

<script>
	new Vue({ el: '#main' })
</script>
