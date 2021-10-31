{{ include('../packages/sysvinit/README.md') }}

## Подготовка

Примените необходимый патч:

<package-script :package="'sysvinit'" :type="'patch'"></package-script>

## Сборка

<package-script :package="'sysvinit'" :type="'build'"></package-script>

## Установка

<package-script :package="'sysvinit'" :type="'install'"></package-script>

