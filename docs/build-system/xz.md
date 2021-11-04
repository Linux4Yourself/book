{{ include('../packages/xz/README.md') }}

## Настройка

```bash 
{{ include('../packages/xz/configure') }}
```

## Сборка

```bash 
{{ include('../packages/xz/build') }}
```

## Тестирование

```bash 
{{ include('../packages/xz/test') }}
```

## Установка

```bash 
{{ include('../packages/xz/install') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/xz/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/xz/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/xz/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/xz/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/xz/multi_install') }}
```

## Установленные файлы

Программы: lzcat (ссылка на xz), lzcmp (ссылка на xzdiff), lzdiff (ссылка на xzdiff), lzegrep (ссылка на xzgrep), lzfgrep (ссылка на xzgrep), lzgrep (ссылка на xzgrep), lzless (ссылка на xzless), lzma (ссылка на xz), lzmadec, lzmainfo, lzmore (ссылка на xzmore), unlzma (ссылка на xz), unxz (ссылка на xz), xz, xzcat (ссылка на xz), xzcmp (ссылка на xzdiff), xzdec, xzdiff, xzegrep (ссылка на xzgrep), xzfgrep (ссылка на xzgrep), xzgrep, xzless и xzmore

Библиотеки: liblzma.so

### Краткое описание

`lzcat` - распаковывает в стандартный вывод

`lzcmp` - запускает cmp для сжатых файлов LZMA

`lzdiff` - запускает diff для сжатых файлов LZMA

`lzegrep` - запускает egrep для сжатых файлов LZMA

`lzfgrep` - запускает fgrep для сжатых файлов LZMA

`lzgrep` - запускает grep для сжатых файлов LZMA

`lzless` - Работает меньше с файлами, сжатыми LZMA

`lzma` - Сжимает или распаковывает файлы с использованием формата LZMA

`lzmadec` - Небольшой и быстрый декодер для сжатых файлов LZMA

`lzmainfo` - Показывает информацию, хранящуюся в заголовке сжатого файла LZMA

`lzmore` - Работает больше с файлами, сжатыми LZMA

`unlzma` - распаковывает файлы с использованием формата LZMA

`unxz` - распаковывает файлы в формате XZ

`xz` - Сжимает или распаковывает файлы в формате XZ

`xzcat` - распаковывает в стандартный вывод

`xzcmp` - запускает cmp для сжатых файлов XZ

`xzdec` - Небольшой и быстрый декодер для сжатых файлов XZ

`xzdiff` - запускает diff для сжатых файлов XZ

`xzegrep` - запускает egrep для сжатых файлов XZ

`xzfgrep` - запускает fgrep для сжатых файлов XZ

`xzgrep` - запускает grep для сжатых файлов XZ

`xzless` - Работает меньше с файлами, сжатыми XZ

`xzmore` - Работает больше с файлами, сжатыми XZ

`liblzma` - библиотека, реализующая сжатие данных без потерь с сортировкой по блокам с использованием цепного алгоритма Лемпеля-Зива-Маркова.


