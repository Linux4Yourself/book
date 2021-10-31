<pkg :name="'procps-ng'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/procps-ng/configure') }}

## Сборка

{{ include('../packages/procps-ng/build') }}

## Тестирование

{{ include('../packages/procps-ng/test') }}

???+ warning

    Пять тестов, связанных с `pkill` дают сбои, так как они (тесты) не были обновлены.

## Установка

{{ include('../packages/procps-ng/install') }}

## При раздельной структуре каталогов

{{ include('../packages/procps-ng/cldirs') }}

<script>
	new Vue({ el: '#main' })
</script>
