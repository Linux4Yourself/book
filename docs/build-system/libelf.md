{{ include('../packages/elfutils/README.md') }}

## Настройка

{{ include('../packages/elfutils/configure') }}

## Сборка

{{ include('../packages/elfutils/build') }}

## Тестирование

{{ include('../packages/elfutils/test') }}

## Установка

Потребуется только установка библиотеки `libelf`.

{{ include('../packages/elfutils/install') }}

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--libdir=/lib`.

{{ include('../packages/elfutils/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/elfutils/multi_prepare') }}

### Подготовка

{{ include('../packages/elfutils/multi_configure') }}

### Сборка

{{ include('../packages/elfutils/multi_build') }}

### Установка

{{ include('../packages/elfutils/multi_install') }}


