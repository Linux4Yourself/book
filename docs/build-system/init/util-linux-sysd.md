<pkg :name="'util-linux'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'util-linux'" :type="'configure-systemd'"></package-script>

## Сборка

<package-script :package="'util-linux'" :type="'build-systemd'"></package-script>

## Тестирование

!> Тестирование пакета от имени пользователя `root` может сломать Вашу систему. Для того чтобы этого не случилось, производите тесты от имени непривилегированного пользователя. Для запуска тестов параметр `CONFIG_SCSI_DEBUG` для ядра должен быть доступен в текущей системе и должен быть собран в виде модуля. Также должны быть установлены некоторые другие пакеты из руководства extra. При желании этот тест может быть запущен после перезагрузки в завершенную систему LX4: `bash tests/run.sh --srcdir=$PWD --builddir=$PWD`

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
</script>
