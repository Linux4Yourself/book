{{ include('../packages/flex/README.md') }}

## Настройка

```bash 
{{ include('../packages/flex/configure') }}
```

## Сборка

```bash 
{{ include('../packages/flex/build') }}
```

## Тестирование

```bash 
{{ include('../packages/flex/test') }}
```

## Установка

```bash 
{{ include('../packages/flex/install') }}
```

Некоторые программы обращаются к `lex`, а не `flex`, поэтому создайте ссылку:

```bash 
{{ include('../packages/flex/postinstall') }}
```

## Установленные файлы

Программы: `flex`, `flex++` (ссылка на `flex`) и `lex` (ссылка на `flex`)

Библиотеки: `libfl.so`


