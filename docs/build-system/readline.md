<pkg :name="'readline'" instsize showsbu2></pkg>

## Подготовка

Переустановка Readline приведет к переименованию старых библиотек в `<имя библиотеки>.old`. Хотя обычно это не проблема, в некоторых случаях это может вызвать ошибку в ldconfig. Этого можно избежать, выполнив следующие команды:

[filename](../packages/readline/prepare ':include')

## Настройка

[filename](../packages/readline/configure ':include')

### Значения параметров

`--with-curses` - включает использование библиотеки `ncurses`

## Сборка

[filename](../packages/readline/build ':include')

## Установка

[filename](../packages/readline/install ':include')

## При использовании раздельной структуры каталогов

[filename](../packages/readline/cldirs ':include')

## Для multilib

### Очистка

[filename](../packages/readline/multi_prepare ':include')

### Настройка

[filename](../packages/readline/multi_configure ':include')

### Сборка

[filename](../packages/readline/multi_build ':include')

### Установка

[filename](../packages/readline/multi_install ':include')

## Установленные файлы

Библиотеки: `libhistory.so` и `libreadline.so`

<script>
	new Vue({ el: '#main' })
</script>
