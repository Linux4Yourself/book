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

## Установленные файлы

**Программы:** `aclocal`, `aclocal-1.16` (жёсткая ссылка на `aclocal`), `automake`, `automake-1.16` (жёсткая ссылка на `automake`)

**Директории:** `/usr/share/aclocal-1.16`, `/usr/share/automake-1.16`, `/usr/share/doc/automake`
