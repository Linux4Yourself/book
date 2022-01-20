{{ include('../packages/acl/README.md') }}

## Настройка

```bash 
{{ include('../packages/acl/configure') }}
```

## Сборка

```bash 
{{ include('../packages/acl/build') }}
```

## Установка

```bash 
{{ include('../packages/acl/install') }}
```

## При раздельной структуре каталогов

Добавьте к скрипту `configure` опцию `--bindir=/bin`.

```bash 
{{ include('../packages/acl/cldirs') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/acl/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/acl/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/acl/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/acl/multi_install') }}
```

## Установленные файлы

**Программы:** `chacl`, `getfacl`, `setfacl`

**Библиотеки:** `libacl.so`


