{{ include('../packages/gdbm/README.md') }}

## Настройка

```bash 
{{ include('../packages/gdbm/configure') }}
```

### Значения параметров

`--enable-libgdbm-compat` - позволяет использовать библиотеку для совместимости c `libgdbm`. Некоторые пакеты могут использовать старые процедуры DBM, которые и предоставляет эта библиотека.

## Сборка

```bash 
{{ include('../packages/gdbm/build') }}
```

## Тестирование

```bash 
{{ include('../packages/gdbm/test') }}
```

???+ warning "Предупреждение"

    Известно, что один тест (`version`) может дать сбой.

## Установка

```bash 
{{ include('../packages/gdbm/install') }}
```


