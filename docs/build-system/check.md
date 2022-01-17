{{ include('../packages/check/README.md') }}

## Настройка

```bash 
{{ include('../packages/check/configure') }}
```

## Сборка

```bash 
{{ include('../packages/check/build') }}
```

## Тестирование

```bash 
{{ include('../packages/check/test') }}
```

> Тесты добавляют 4 SBU ко всему времени установки пакета.

## Установка

```bash 
{{ include('../packages/check/install') }}
```

## Установленные файлы

**Программы:** `checkmk`

**Библиотеки:** `libcheck.so`
