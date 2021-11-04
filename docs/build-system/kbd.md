
{{ include('../packages/kbd/README.md') }}

## Подготовка

Примените патч для исправления работы клавиш backspace и delete:
```bash 
{{ include('../packages/kbd/patch') }}
```

Удалите ненужную программу `resizecons`, требующую `svgalib`:
```bash 
{{ include('../packages/kbd/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/kbd/configure') }}
```

### Значения параметров

`--disable-vlock` - Данная библиотека требует Linux-PAM.

## Сборка

```bash 
{{ include('../packages/kbd/build') }}
```

## Тестирование

```bash 
{{ include('../packages/kbd/test') }}
```

## Установка

```bash 
{{ include('../packages/kbd/install') }}
```
