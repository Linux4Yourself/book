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

