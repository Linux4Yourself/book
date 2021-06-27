<pkg :name="'util-linux'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'util-linux'" :type="'configure-systemd'"></package-script>

## Сборка

<package-script :package="'util-linux'" :type="'build-systemd'"></package-script>

## Тестирование

<package-script :package="'util-linux'" :type="'test-systemd'"></package-script>

## Установка

<package-script :package="'util-linux'" :type="'install-systemd'"></package-script>

## Для multilib

### Очистка

<package-script :package="'util-linux'" :type="'multi_prepare-systemd'"></package-script>

### Настройка

<package-script :package="'util-linux'" :type="'multi_configure-systemd'"></package-script>

### Сборка

<package-script :package="'util-linux'" :type="'multi_build-systemd'"></package-script>

### Установка

<package-script :package="'util-linux'" :type="'multi_install-systemd'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>https://github.com/Linux4Yourself/Linux4Yourself.Book/blob/Linuxoid85-patch-2/docs/build-system/sysvinit.md
