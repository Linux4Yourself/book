{{ include('../packages/tar/README.md') }}

## Настройка

```bash 
{{ include('../packages/tar/configure') }}
```

## Сборка

```bash 
{{ include('../packages/tar/build') }}
```

## Тестирование

```bash 
{{ include('../packages/tar/test') }}
```

> Тестирование добавляет 3 SBU ко всему времени установки пакета

???+ warning "Предупреждение"

    Известно, что тест `store/restore` даёт сбой.

## Установка

```bash 
{{ include('../packages/tar/install') }}
```


