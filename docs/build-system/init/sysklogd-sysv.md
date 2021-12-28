{{ include('../packages/sysklogd/README.md') }}

## Подготовка

Исправьте ошибку, приводящую к краху программы:

```bash 
{{ include('../packages/sysklogd/prepare') }}
```

## Сборка

```bash 
{{ include('../packages/sysklogd/build') }}
```

## Тестирование

```bash 
{{ include('../packages/sysklogd/test') }}
```

## Установка

```bash 
{{ include('../packages/sysklogd/install') }}
```

> Если вы собираете систему с раздельной структурой каталогов, то пропустите шаг с установкой, перейдя к следующему

## При раздельной структуре каталогов

```bash 
{{ include('../packages/sysklogd/cldirs') }}
```

## Настройка

Создайте конфигурационный файл:

```bash 
{{ include('../packages/sysklogd/postinstall') }}
```


