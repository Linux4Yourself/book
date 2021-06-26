<pkg :name="'dbus'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'dbus'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'dbus'" :type="'build'"></package-script>

## Установка

<package-script :package="'dbus'" :type="'install'"></package-script>

Создайте символическую ссылку, чтобы `SystemD` и `D-Bus` использовали один и тот же файл `machine-id`
<package-script :package="'dbus'" :type="'postinstall'"></package-script>

## Для multilib

### Очистка

<package-script :package="'dbus'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'dbus'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'dbus'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'dbus'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
