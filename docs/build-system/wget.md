{{ include('../packages/wget/README.md') }}

## Настройка

```bash 
{{ include('../packages/wget/configure') }}
```

### Значения параметров

- `--sysconfdir=/etc` - меняет путь к директории с настройками с `/usr/etc` на `/etc`
- `--with-ssl=openssl` - позволяет использовать openssl вместо GnuTLS.

## Сборка

```bash 
{{ include('../packages/wget/build') }}
```

## Установка

```bash 
{{ include('../packages/wget/install') }}
```

## Конфигурационные файлы

- `/etc/wgetrc`
- `~/.wgetrc`

## Установленные файлы

- **Установленные программы:** `wget`


