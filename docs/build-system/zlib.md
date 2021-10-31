{{ include('../packages/zlib-ng/README.md') }}

## Настройка

```bash 
{{ include('../packages/zlib-ng/configure') }}
```

### Значения параметров

`--zlib-compat` - включает полную совместимость с API `zlib`.

`--native` - использовать все доступные для вашего процессора оптимизации.

## Сборка

```bash 
{{ include('../packages/zlib-ng/build') }}
```

## Тестирование

```bash 
{{ include('../packages/zlib-ng/test') }}
```

## Установка

```bash 
{{ include('../packages/zlib-ng/install') }}
```

Удалите ненужную статическую библиотеку:

```bash 
{{ include('../packages/zlib-ng/postinstall') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/zlib-ng/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/zlib-ng/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/zlib-ng/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/zlib-ng/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/zlib-ng/multi_install') }}
```

Удалите ненужную статическую библиотеку:

```bash 
{{ include('../packages/zlib-ng/multi_postinstall') }}
```

## Установленные файлы

Библиотеки:`libz.so`

### Краткое описание

`libz.so` - Содержит функции сжатия, используемые многими программами


