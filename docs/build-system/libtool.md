{{ include('../packages/libtool/README.md') }}

## Настройка

```bash 
{{ include('../packages/libtool/configure') }}
```

## Сборка

```bash 
{{ include('../packages/libtool/build') }}
```

## Тестирование

```bash 
{{ include('../packages/libtool/test') }}
```

???+ note "Обратите внимание"

    Если у вас несколько ядер процессора, то можно значительно (иногда более чем на 60%) сократить время выполнения тестирования. Перед выполнением тестов объявите переменную: `TESTSUITEFLAGS=-j<N>`, где `<N>` - число ядер ЦП.

???+ warning "Предупреждение"

    Пять тестов могут дать сбой, однако все тесты проходят после установки `automake`.

## Установка

```bash 
{{ include('../packages/libtool/install') }}
```

Удалите ненужную статическую библиотеку

```bash 
{{ include('../packages/libtool/postinstall') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/libtool/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/libtool/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/libtool/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/libtool/multi_install') }}
```


