<pkg :name="'readline'" instsize showsbu2></pkg>

## Подготовка

Переустановка Readline приведет к переименованию старых библиотек в `<имя библиотеки>.old`. Хотя обычно это не проблема, в некоторых случаях это может вызвать ошибку в ldconfig. Этого можно избежать, выполнив следующие команды:

{{ include('../packages/readline/prepare') }}

## Настройка

{{ include('../packages/readline/configure') }}

### Значения параметров

`--with-curses` - включает использование библиотеки `ncurses`

## Сборка

{{ include('../packages/readline/build') }}

## Установка

{{ include('../packages/readline/install') }}

## При использовании раздельной структуры каталогов

{{ include('../packages/readline/cldirs') }}

## Для multilib

### Очистка

{{ include('../packages/readline/multi_prepare') }}

### Настройка

{{ include('../packages/readline/multi_configure') }}

### Сборка

{{ include('../packages/readline/multi_build') }}

### Установка

{{ include('../packages/readline/multi_install') }}

## Установленные файлы

Библиотеки: `libhistory.so` и `libreadline.so`


