{{ include('../packages/less/README.md') }}

## Настройка

<package-script :package="'less'" :type="'configure'"></package-script>

### Значения параметров

`--sysconfdir=/etc` - настроить путь `/etc` для хранения конфигурации.

## Сборка

<package-script :package="'less'" :type="'build'"></package-script>

## Установка

<package-script :package="'less'" :type="'install'"></package-script>


