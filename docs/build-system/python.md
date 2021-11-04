{{ include('../packages/python/README.md') }}

## Настройка

```bash 
{{ include('../packages/python/configure') }}
```

## Сборка

```bash 
{{ include('../packages/python/build') }}
```

## Установка

```bash 
{{ include('../packages/python/install') }}
```

## Тестирование

```bash 
{{ include('../packages/python/test') }}
```

???+ danger "Важно"

    Тесты запускать не рекомендуется. Они могут зависнуть. При желании выполните тесты при переустановке Python, но уже в руководстве `Extra`.

## Установленные файлы

Программы: 2to3, idle3, pip3, pydoc3, python3 и python3-config

Библиотеки: libpython3.9.so и libpython3.so

Директории: /usr/include/python3.9 и /usr/lib/python3


