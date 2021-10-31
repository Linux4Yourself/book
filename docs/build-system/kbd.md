
{{ include('../packages/kbd/README.md') }}


## Подготовка

Примените патч для исправления работы клавиш backspace и delete:
<package-script :package="'kbd'" :type="'patch'"></package-script>

Удалите ненужную программу `resizecons`, требующую `svgalib`:
<package-script :package="'kbd'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'kbd'" :type="'configure'"></package-script>

### Значения параметров

`--disable-vlock` - Данная библиотека требует Linux-PAM.

## Сборка

<package-script :package="'kbd'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'kbd'" :type="'test'"></package-script>

## Установка

<package-script :package="'kbd'" :type="'install'"></package-script>

!> Пакет `kbd` не предоставляет некоторых рабочих раскладок клавиатуры (например, для белорусского языка). Загрузите (при необходимости) эти раскладки отдельно.
