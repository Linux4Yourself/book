{{ include('../packages/dbus/README.md') }}

## Настройка

```bash 
{{ include('../packages/dbus/configure') }}
```

## Сборка

```bash 
{{ include('../packages/dbus/build') }}
```

## Тестирование

```bash 
{{ include('../packages/dbus/test') }}
```

## Установка

```bash 
{{ include('../packages/dbus/install') }}
```

Создайте символическую ссылку, чтобы `systemd` и `D-Bus` использовали один и тот же файл `machine-id`:

```bash 
{{ include('../packages/dbus/postinstall') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/dbus/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/dbus/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/dbus/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/dbus/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/dbus/multi_install') }}
```


