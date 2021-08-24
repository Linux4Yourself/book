<pkg :name="'dbus'" instsize showsbu2></pkg>

## Настройка

[filename](../../packages/dbus/configure ':include')

## Сборка

[filename](../../packages/dbus/build ':include')

## Тестирование

[filename](../../packages/dbus/test ':include')

## Установка

[filename](../../packages/dbus/install ':include')

Создайте символическую ссылку, чтобы `systemd` и `D-Bus` использовали один и тот же файл `machine-id`:

[filename](../../packages/dbus/postinstall ':include')

## При раздельной структуре каталогов

[filename](../../packages/dbus/cldirs ':include')

## Для multilib

### Очистка

[filename](../../packages/dbus/multi_prepare ':include')

### Настройка

[filename](../../packages/dbus/multi_configure ':include')

### Сборка

[filename](../../packages/dbus/multi_build ':include')

### Установка

[filename](../../packages/dbus/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
