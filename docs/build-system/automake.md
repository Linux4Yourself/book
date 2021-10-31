<pkg :name="'automake'" instsize showsbu2></pkg>

## Настройка

Внесите исправление для некорректного теста:
{{ include('../packages/automake/prepare') }}
{{ include('../packages/automake/configure') }}

## Сборка

{{ include('../packages/automake/build') }}

## Тестирование

{{ include('../packages/automake/test') }}

???+ warning
	
	Известно, что тесты `t/subobj.sh`, `t/deprecated-acinit.sh` и `t/init.sh` не проходят в LX4.

## Установка

{{ include('../packages/automake/install') }}

<script>
	new Vue({ el: '#main' })
</script>
