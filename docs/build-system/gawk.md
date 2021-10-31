{{ include('../packages/gawk/README.md') }}

## Подготовка

Следует убедиться, что ненужные файлы не будут установлены:

<package-script :package="'gawk'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'gawk'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'gawk'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'gawk'" :type="'test'"></package-script>

## Установка

<package-script :package="'gawk'" :type="'install'"></package-script>

## Установка документации

<package-script :package="'gawk'" :type="'install-doc'"></package-script>


