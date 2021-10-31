{{ include('../packages/acl/README.md') }}

## Настройка

{{ include('../packages/acl/configure') }}

## Сборка

{{ include('../packages/acl/build') }}

## Установка

{{ include('../packages/acl/install') }}

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

{{ include('../packages/acl/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/acl/multi_prepare') }}

### Настройка

{{ include('../packages/acl/multi_configure') }}

### Сборка

{{ include('../packages/acl/multi_build') }}

### Установка

{{ include('../packages/acl/multi_install') }}

## Установленные файлы

Программы: `chacl`, `getfacl`, `setfacl`

Библиотеки: `libacl.so`


