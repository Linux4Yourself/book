{{ include('../packages/intltool/README.md') }}

## Настройка

Исправьте предупреждение, которое может появиться при использовании perl версии 5.22 и выше:

<package-script :package="'intltool'" :type="'prepare'"></package-script>
<package-script :package="'intltool'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'intltool'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'intltool'" :type="'test'"></package-script>

## Установка

<package-script :package="'intltool'" :type="'install'"></package-script>

## Установка документации

<package-script :package="'intltool'" :type="'install-doc'"></package-script>


