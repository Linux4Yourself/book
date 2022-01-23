{{ include('../packages/util-linux/README.md') }}

## Настройка

```bash 
{{ include('../packages/util-linux/configure') }}
```

???+ note "Обратите внимание"

    Если вы собираете систему с раздельной структурой каталогов, уберите аргумент `--libdir=/usr/lib`!

## Сборка

```bash 
{{ include('../packages/util-linux/build') }}
```

## Установка

```bash 
{{ include('../packages/util-linux/install') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/util-linux/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/util-linux/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/util-linux/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/util-linux/multi_install') }}
```


