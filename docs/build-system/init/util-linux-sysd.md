<pkg :name="'util-linux'" instsize showsbu2></pkg>

## Настройка

[filename](../../packages/util-linux/configure-systemd ':include')

???+ tip

    Если вы собираете систему с раздельной структурой каталогов, уберите аргумент `--libdir=/usr/lib`!

## Сборка

[filename](../../packages/util-linux/build-systemd ':include')

## Тестирование

???+ danger

    Тестирование пакета от имени пользователя `root` может сломать Вашу систему. Для того чтобы этого не случилось, производите тесты от имени непривилегированного пользователя. Для запуска тестов параметр `CONFIG_SCSI_DEBUG` для ядра должен быть доступен в текущей системе и должен быть собран в виде модуля. Также должны быть установлены некоторые другие пакеты из руководства extra. При желании этот тест может быть запущен после перезагрузки в завершенную систему LX4: `bash tests/run.sh --srcdir=$PWD --builddir=$PWD`

[filename](../../packages/util-linux/test-systemd ':include')

## Установка

[filename](../../packages/util-linux/install-systemd ':include')

## Для multilib

### Очистка

[filename](../../packages/util-linux/multi_prepare-systemd ':include')

### Настройка

[filename](../../packages/util-linux/multi_configure-systemd ':include')

### Сборка

[filename](../../packages/util-linux/multi_build-systemd ':include')

### Установка

[filename](../../packages/util-linux/multi_install-systemd ':include')
<package-script :package="'util-linux'" :type="'multi_install-systemd'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
