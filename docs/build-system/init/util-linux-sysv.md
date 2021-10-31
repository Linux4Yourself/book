<pkg :name="'util-linux'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/util-linux/configure') }}

## Сборка

{{ include('../packages/util-linux/build') }}

> Если вы собираете систему с раздельной структурой каталогов, уберите аргумент `--libdir=/usr/lib`!

## Тестирование

!> Тестирование пакета от имени пользователя `root` может сломать Вашу систему. Для того чтобы этого не случилось, производите тесты от имени непривилегированного пользователя. Для запуска тестов параметр `CONFIG_SCSI_DEBUG` для ядра должен быть доступен в текущей системе и должен быть собран в виде модуля. Также должны быть установлены некоторые другие пакеты из руководства extra. При желании этот тест может быть запущен после перезагрузки в завершенную систему LX4: `bash tests/run.sh --srcdir=$PWD --builddir=$PWD`

{{ include('../packages/util-linux/test') }}

## Установка

{{ include('../packages/util-linux/install') }}

## Для multilib

### Очистка

{{ include('../packages/util-linux/multi_prepare') }}

### Настройка

{{ include('../packages/util-linux/multi_configure') }}

### Сборка

{{ include('../packages/util-linux/multi_build') }}

### Установка

{{ include('../packages/util-linux/multi_install') }}

<script>
	new Vue({ el: '#main' })
</script>
