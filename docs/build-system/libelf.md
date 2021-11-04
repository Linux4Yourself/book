{{ include('../packages/elfutils/README.md') }}

## Настройка

```bash 
{{ include('../packages/elfutils/configure') }}
```

## Сборка

```bash 
{{ include('../packages/elfutils/build') }}
```

## Тестирование

```bash 
{{ include('../packages/elfutils/test') }}
```

## Установка

Потребуется только установка библиотеки `libelf`.

```bash 
{{ include('../packages/elfutils/install') }}
```

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--libdir=/lib`.

```bash 
{{ include('../packages/elfutils/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/elfutils/multi_prepare') }}
```

### Подготовка

```bash 
{{ include('../packages/elfutils/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/elfutils/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/elfutils/multi_install') }}
```


