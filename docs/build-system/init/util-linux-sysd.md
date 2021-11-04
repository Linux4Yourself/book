{{ include('../packages/util-linux/README.md') }}

## Настройка

```bash 
{{ include('../packages/util-linux/configure-systemd') }}
```

???+ note "Обратите внимание"

    Если вы собираете систему с раздельной структурой каталогов, уберите аргумент `--libdir=/usr/lib`!

## Сборка

```bash 
{{ include('../packages/util-linux/build-systemd') }}
```

## Тестирование

???+ danger "Важно"

    Тестирование пакета от имени пользователя `root` может сломать Вашу систему. Для того чтобы этого не случилось, производите тесты от имени непривилегированного пользователя. Для запуска тестов параметр `CONFIG_SCSI_DEBUG` для ядра должен быть доступен в текущей системе и должен быть собран в виде модуля. Также должны быть установлены некоторые другие пакеты из руководства extra. При желании этот тест может быть запущен после перезагрузки в завершенную систему LX4: `bash tests/run.sh --srcdir=$PWD --builddir=$PWD`

```bash 
{{ include('../packages/util-linux/test-systemd') }}
```

## Установка

```bash 
{{ include('../packages/util-linux/install-systemd') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/util-linux/multi_prepare-systemd') }}
```

### Настройка

```bash 
{{ include('../packages/util-linux/multi_configure-systemd') }}
```

### Сборка

```bash 
{{ include('../packages/util-linux/multi_build-systemd') }}
```

### Установка

```bash 
{{ include('../packages/util-linux/multi_install-systemd') }}
```
```bash 
{{ include('../packages/util-linux/multi_install-systemd') }}
```


