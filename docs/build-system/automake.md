{{ include('../packages/automake/README.md') }}

## Настройка

Внесите исправление для некорректного теста:
```bash 
{{ include('../packages/automake/prepare') }}
```
```bash 
{{ include('../packages/automake/configure') }}
```

## Сборка

```bash 
{{ include('../packages/automake/build') }}
```

## Тестирование

```bash 
{{ include('../packages/automake/test') }}
```

???+ warning "Предупреждение"
	
	Известно, что тесты `t/subobj.sh`, `t/deprecated-acinit.sh` и `t/init.sh` не проходят в LX4.

## Установка

```bash 
{{ include('../packages/automake/install') }}
```


