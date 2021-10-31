<pkg :name="'bison'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/bison/configure') }}

## Сборка

{{ include('../packages/bison/build') }}

## Тестирование

{{ include('../packages/bison/test') }}

> Добавляет примерно 5,5 SBU к общему времени установки пакета

## Установка

{{ include('../packages/bison/install') }}

<script>
	new Vue({ el: '#main' })
</script>
