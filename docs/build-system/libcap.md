{{ include('../packages/libcap/README.md') }}

## Подготовка

Отключите установку статических библиотек:

```bash 
{{ include('../packages/libcap/prepare') }}
```

## Сборка

```bash 
{{ include('../packages/libcap/build') }}
```

## Тестирование

```bash 
{{ include('../packages/libcap/test') }}
```

## Установка

```bash 
{{ include('../packages/libcap/install') }}
```

Установите корректные права для библиотек:

```bash 
{{ include('../packages/libcap/postinstall') }}
```

## Объяснения параметров

`lib=lib` - этот параметр устанавливает директорию с библиотеками в `/usr/lib` вместо `/usr/lib64`.

## При раздельной структуре каталогов

```bash 
{{ include('../packages/libcap/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/libcap/multi_prepare') }}
```

### Сборка

```bash 
{{ include('../packages/libcap/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/libcap/multi_install') }}
```

## Установленные файлы

Программы: `capsh`, `getcap`, `getpcaps` и `setcap`

Библиотеки: `libcap.so` и `libpsx.so`


