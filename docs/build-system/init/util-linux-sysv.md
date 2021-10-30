<pkg :name="'util-linux'" instsize showsbu2></pkg>

## Настройка

[filename](../../packages/util-linux/configure ':include')

## Сборка

[filename](../../packages/util-linux/build ':include')

???+ tip

    Если вы собираете систему с раздельной структурой каталогов, уберите аргумент `--libdir=/usr/lib`!

## Тестирование

???+ danger

    Тестирование пакета от имени пользователя `root` может сломать Вашу систему. Для того чтобы этого не случилось, производите тесты от имени непривилегированного пользователя. Для запуска тестов параметр `CONFIG_SCSI_DEBUG` для ядра должен быть доступен в текущей системе и должен быть собран в виде модуля. Также должны быть установлены некоторые другие пакеты из руководства extra. При желании этот тест может быть запущен после перезагрузки в завершенную систему LX4: `bash tests/run.sh --srcdir=$PWD --builddir=$PWD`

[filename](../../packages/util-linux/test ':include')

## Установка

[filename](../../packages/util-linux/install ':include')

## Для multilib

### Очистка

[filename](../../packages/util-linux/multi-prepare ':include')

### Настройка

[filename](../../packages/util-linux/multi_configure ':include')

### Сборка

[filename](../../packages/util-linux/multi_build ':include')

### Установка

[filename](../../packages/util-linux/multi_install ':include')

<script>
	new Vue({ el: '#main' })
</script>
