{{ include('../packages/freetype/README.md') }}

## Настройка

???+ note "Обратите внимание"

	В руководстве extra, данный пакет следует переустановить после установки `harfbuzz` из-за циклической зависимости.

```bash 
{{ include('../packages/freetype/configure') }}
```

## Сборка

```bash 
{{ include('../packages/freetype/build') }}
```

## Установка

```bash 
{{ include('../packages/freetype/install') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/freetype/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/freetype/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/freetype/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/freetype/multi_install') }}
```


