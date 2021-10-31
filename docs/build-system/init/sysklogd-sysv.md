{{ include('../packages/sysklogd/README.md') }}

## Подготовка

Исправьте ошибку, приводящую к краху программы:

{{ include('../packages/sysklogd/prepare') }}

## Сборка

{{ include('../packages/sysklogd/build') }}

## Тестирование

{{ include('../packages/sysklogd/test') }}

## Установка

{{ include('../packages/sysklogd/install') }}

> Если вы собираете систему с раздельной структурой каталогов, то пропустите шаг с установкой, перейдя к следующему

## При раздельной структуре каталогов

{{ include('../packages/sysklogd/cldirs') }}

## Настройка

Создайте конфигурационный файл:

{{ include('../packages/sysklogd/postinstall') }}


