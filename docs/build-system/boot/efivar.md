{{ include('../packages/efivar/README.md') }}

## Подготовка

Примените патч, исправляющий ошибку сборки новыми версиями GCC:

```bash 
{{ include('../packages/efivar/patch') }}
```

## Сборка

```bash 
{{ include('../packages/efivar/build') }}
```

## Установка

```bash 
{{ include('../packages/efivar/install') }}
```
