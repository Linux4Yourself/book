{{ include('../packages/procps-ng/README.md') }}

## Настройка

```bash 
{{ include('../packages/procps-ng/configure-systemd') }}
```

## Сборка

```bash 
{{ include('../packages/procps-ng/build') }}
```

## Тестирование

```bash 
{{ include('../packages/procps-ng/test') }}
```

???+ warning "Предупреждение"

    Пять тестов, связанных с `pkill` дают сбои, так как они (тесты) не были обновлены.

## Установка

```bash 
{{ include('../packages/procps-ng/install') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/procps-ng/cldirs') }}
```


