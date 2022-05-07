{{ include('../packages/findutils/README.md') }}

## Настройка

```bash 
{{ include('../packages/findutils/configure') }}
```

### Значения параметров

`--localstatedir` - замена расположения базы данных `locate` в `/var/lib/locate` для соответствия FHS.

## Сборка

```bash 
{{ include('../packages/findutils/build') }}
```

## Тестирование

```bash 
{{ include('../packages/findutils/test') }}
```

## Установка

```bash 
{{ include('../packages/findutils/install') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/findutils/cldirs') }}
```

## Установленные файлы

**Программы:** `find`, `locate`, `updatedb` и `xargs`

**Директории:** `/var/lib/locate`
