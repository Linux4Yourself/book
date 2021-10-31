{{ include('../packages/automake/README.md') }}

## Настройка

Внесите исправление для некорректного теста:
{{ include('../packages/automake/prepare') }}
{{ include('../packages/automake/configure') }}

## Сборка

{{ include('../packages/automake/build') }}

## Тестирование

{{ include('../packages/automake/test') }}

???+ warning "Предупреждение"
	
	Известно, что тесты `t/subobj.sh`, `t/deprecated-acinit.sh` и `t/init.sh` не проходят в LX4.

## Установка

{{ include('../packages/automake/install') }}


