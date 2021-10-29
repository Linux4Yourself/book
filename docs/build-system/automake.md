<pkg :name="'automake'" instsize showsbu2></pkg>

## Настройка

Внесите исправление для некорректного теста:
[filename](../packages/automake/prepare ':include')
[filename](../packages/automake/configure ':include')

## Сборка

[filename](../packages/automake/build ':include')

## Тестирование

[filename](../packages/automake/test ':include')

???+ warning
	
	Известно, что тесты `t/subobj.sh`, `t/deprecated-acinit.sh` и `t/init.sh` не проходят в LX4.

## Установка

[filename](../packages/automake/install ':include')

<script>
	new Vue({ el: '#main' })
</script>
