{{ include('../packages/autoconf/README.md') }}

## Настройка

```bash 
{{ include('../packages/autoconf/configure') }}
```

## Сборка

```bash 
{{ include('../packages/autoconf/build') }}
```

## Тестирование

```bash 
{{ include('../packages/autoconf/test') }}
```

???+ note "Обратите внимание"
	
	Если у вас несколько ядер процессора, то можно значительно (иногда более чем на 60%) сократить время выполнения тестирования. Перед выполнением тестов объявите переменную: `TESTSUITEFLAGS=-j<N>`, где `<N>` - число ядер ЦП.

## Установка

```bash 
{{ include('../packages/autoconf/install') }}
```


