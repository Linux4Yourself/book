{{ include('../packages/gperf/README.md') }}

## Настройка

```bash 
{{ include('../packages/gperf/configure') }}
```

## Сборка

```bash 
{{ include('../packages/gperf/build') }}
```

## Тестирование

???+ warning "Предупреждение"

    Тестирование должно производиться в один поток, так как при одновременном тестировании (многопотоковом) появляются всевозможные ошибки. Поэтому и используется ключ `-j1`:

```bash 
{{ include('../packages/gperf/test') }}
```

## Установка

```bash 
{{ include('../packages/gperf/install') }}
```


