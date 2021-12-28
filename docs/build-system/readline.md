{{ include('../packages/readline/README.md') }}

## Подготовка

Переустановка Readline приведет к переименованию старых библиотек в `<имя библиотеки>.old`. Хотя обычно это не проблема, в некоторых случаях это может вызвать ошибку в ldconfig. Этого можно избежать, выполнив следующие команды:

```bash 
{{ include('../packages/readline/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/readline/configure') }}
```

### Значения параметров

`--with-curses` - включает использование библиотеки `ncurses`

## Сборка

```bash 
{{ include('../packages/readline/build') }}
```

## Установка

```bash 
{{ include('../packages/readline/install') }}
```

## При использовании раздельной структуры каталогов

```bash 
{{ include('../packages/readline/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/readline/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/readline/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/readline/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/readline/multi_install') }}
```

## Установленные файлы

Библиотеки: `libhistory.so` и `libreadline.so`


