{{ include('../packages/efivar/README.md') }}

## Подготовка

Примените патч, исправляющий ошибку сборки новыми версиями GCC:

<package-script :package="'efivar'" :type="'patch'"></package-script>

## Сборка

<package-script :package="'efivar'" :type="'build'"></package-script>

## Установка

<package-script :package="'efivar'" :type="'install'"></package-script>
