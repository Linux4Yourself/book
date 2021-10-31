{{ include('../packages/p11-kit/README.md') }}

## Подготовка

Подготовьте специфичный для дистрибутива скрипт:

```bash 
{{ include('../packages/p11-kit/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/p11-kit/configure') }}
```

### Значение параметров configure

`--with-trust-paths=/etc/pki/anchors` - задает путь для доверенных сертификатов

## Сборка

```bash 
{{ include('../packages/p11-kit/build') }}
```

## Установка

```bash 
{{ include('../packages/p11-kit/install') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/p11-kit/multi_prepare') }}
```

## Настройка

```bash 
{{ include('../packages/p11-kit/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/p11-kit/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/p11-kit/multi_install') }}
```


