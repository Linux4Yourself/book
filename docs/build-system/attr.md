{{ include('../packages/attr/README.md') }}

## Настройка

{{ include('../packages/attr/configure') }}

## Сборка

{{ include('../packages/attr/build') }}

## Тестирование

???+ warning "Предупреждение"
	
	Тестирование нужно производить на файловой системе, поддерживающей расширенные атрибуты. Например, ext2-ext4.

{{ include('../packages/attr/test') }}

## Установка

{{ include('../packages/attr/install') }}

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

{{ include('../packages/attr/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/attr/multi_prepare') }}

### Настройка

{{ include('../packages/attr/multi_configure') }}

### Сборка

{{ include('../packages/attr/multi_build') }}

### Установка

{{ include('../packages/attr/multi_install') }}

## Установленные файлы

Программы: `attr`, `getfattr`, `setfattr`

Библиотеки: `libattr.so`


