<pkg :name="'findutils'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/findutils/configure') }}

### Значения параметров

`--localstatedir` - замена расположения базы данных `locate` в `/var/lib/locate` для соответствия FHS.

## Сборка

{{ include('../packages/findutils/build') }}

## Тестирование

{{ include('../packages/findutils/test') }}

## Установка

{{ include('../packages/findutils/install') }}

## При раздельной структуре каталогов

{{ include('../packages/findutils/cldirs') }}


