{{ include('../packages/bison/README.md') }}

## Настройка

```bash 
{{ include('../packages/bison/configure') }}
```

## Сборка

```bash 
{{ include('../packages/bison/build') }}
```

## Тестирование

```bash 
{{ include('../packages/bison/test') }}
```

> Добавляет примерно 5,5 SBU к общему времени установки пакета

## Установка

```bash 
{{ include('../packages/bison/install') }}
```

## Установленные файлы

**Программы:** `bison` и `yacc`

**Библиотеки:** `liby.a`

**Директории:** `/usr/share/bison`
