{{ include('../packages/intltool/README.md') }}

## Настройка

Исправьте предупреждение, которое может появиться при использовании perl версии 5.22 и выше:

```bash 
{{ include('../packages/intltool/prepare') }}
```
```bash 
{{ include('../packages/intltool/configure') }}
```

## Сборка

```bash 
{{ include('../packages/intltool/build') }}
```

## Тестирование

```bash 
{{ include('../packages/intltool/test') }}
```

## Установка

```bash 
{{ include('../packages/intltool/install') }}
```

## Установка документации

```bash 
{{ include('../packages/intltool/install-doc') }}
```

## Установленные файлы

**Программы:** `intltool-{extract,merge,prepare,update}` и `intltoolize`

**Директории:** `/usr/share/intltool` и `/usr/share/doc/intltool`
