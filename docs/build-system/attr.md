{{ include('../packages/attr/README.md') }}

## Настройка

```bash 
{{ include('../packages/attr/configure') }}
```

## Сборка

```bash 
{{ include('../packages/attr/build') }}
```

## Тестирование

???+ warning "Предупреждение"
	
	Тестирование нужно производить на файловой системе, поддерживающей расширенные атрибуты. Например, ext2-ext4.

```bash 
{{ include('../packages/attr/test') }}
```

## Установка

```bash 
{{ include('../packages/attr/install') }}
```

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

```bash 
{{ include('../packages/attr/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/attr/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/attr/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/attr/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/attr/multi_install') }}
```

## Установленные файлы

**Программы:** `attr`, `getfattr`, `setfattr`

**Библиотеки:** `libattr.so`


