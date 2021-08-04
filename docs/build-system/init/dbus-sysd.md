<pkg :name="'dbus'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/core/dbus/configure ':include')

## Сборка

[filename](../packages/core/dbus/build ':include')

## Тестирование

[filename](../packages/core/dbus/test ':include')

## Установка

[filename](../packages/core/dbus/install ':include')

Создайте символическую ссылку, чтобы `systemd` и `D-Bus` использовали один и тот же файл `machine-id`:

[filename](../packages/core/dbus/postinstall ':include')

## При раздельной структуре каталогов

[filename](../packages/core/dbus/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/core/dbus/multi_prepare ':include')

### Настройка

[filename](../packages/core/dbus/multi_configure ':include')

### Сборка

[filename](../packages/core/dbus/multi_build ':include')

### Установка

[filename](../packages/core/dbus/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
