<pkg :name="'systemd'" instsize showsbu2></pkg>

## Подготовка

Удалите ненужную группу `render` из правил `udev`:
<package-script :package="'systemd'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'systemd'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'systemd'" :type="'build'"></package-script>

## Установка

<package-script :package="'systemd'" :type="'install'"></package-script>

- Удалите ненужный каталог;
- Создайте файл `/etc/machine-id`, необходимый для `systemd-journald`;
- Настройте базовую целевую структуру;
- Отключите службу, которая, как известно, вызывает проблемы с системами, использующими конфигурацию сети, отличную от той, которая предоставляется systemd-networkd:

<package-script :package="'systemd'" :type="'postinstall'"></package-script>

## Для multilib

### Очистка

<package-script :package="'systemd'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'systemd'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'systemd'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'systemd'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
