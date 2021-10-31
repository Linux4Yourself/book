<pkg :name="'autoconf'" instsize showsbu2></pkg>

## Настройка

{{ include('../packages/autoconf/configure') }}

## Сборка

{{ include('../packages/autoconf/build') }}

## Тестирование

{{ include('../packages/autoconf/test') }}

???+ note "Обратите внимание"
	
	Если у вас несколько ядер процессора, то можно значительно (иногда более чем на 60%) сократить время выполнения тестирования. Перед выполнением тестов объявите переменную: `TESTSUITEFLAGS=-j<N>`, где `<N>` - число ядер ЦП.

## Установка

{{ include('../packages/autoconf/install') }}


