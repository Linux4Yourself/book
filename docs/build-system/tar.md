<pkg :name="'tar'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/tar/configure') }}

## Сборка

{{ include('../packages/tar/build') }}

## Тестирование

{{ include('../packages/tar/test') }}

> Тестирование добавляет 3 SBU ко всему времени установки пакета

???+ warning

    Известно, что тест `store/restore` даёт сбой.

## Установка

{{ include('../packages/tar/install') }}

<script>
	new Vue({ el: '#main' })
</script>
