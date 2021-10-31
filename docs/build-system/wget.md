{{ include('../packages/wget/README.md') }}

## Настройка

<package-script :package="'wget'" :type="'configure'"></package-script>

### Значения параметров

- `--sysconfdir=/etc` - меняет путь к директории с настройками с `/usr/etc` на `/etc`
- `--with-ssl=openssl` - позволяет использовать openssl вместо GnuTLS.

## Сборка

<package-script :package="'wget'" :type="'build'"></package-script>

## Установка

<package-script :package="'wget'" :type="'install'"></package-script>

## Конфигурационные файлы

- `/etc/wgetrc`
- `~/.wgetrc`

## Установленные файлы

- **Установленные программы:** `wget`


