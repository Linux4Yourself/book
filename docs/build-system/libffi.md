{{ include('../packages/libffi/README.md') }}

## Настройка

???+ warning "Предупреждение"

    Libffi как и GMP оптимизируется под определённый процессор. Если планируется переносить систему на компьютер с другим ЦП, экспортируйте `CFLAGS` и `CXXFLAGS`, чтобы указать универсальную сборку для вашей архитектуры.

```bash 
{{ include('../packages/libffi/configure') }}
```

## Сборка

```bash 
{{ include('../packages/libffi/build') }}
```

## Тестирование

```bash 
{{ include('../packages/libffi/test') }}
```

## Установка

```bash 
{{ include('../packages/libffi/install') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/libffi/multi_prepare') }}
```

### Подготовка

```bash 
{{ include('../packages/libffi/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/libffi/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/libffi/multi_install') }}
```

## Установленные файлы

Библиотеки: libffi.so

