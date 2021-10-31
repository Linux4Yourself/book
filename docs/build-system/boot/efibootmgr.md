{{ include('../packages/efibootmgr/README.md') }}

## Подготовка

Исправьте ошибку сборки:
```bash 
{{ include('../packages/efibootmgr/prepare') }}
```

## Сборка

```bash 
{{ include('../packages/efibootmgr/build') }}
```

## Установка

```bash 
{{ include('../packages/efibootmgr/install') }}
```

## Значения новых команд

- `EFIDIR=LIN`- указывает имя подкаталога дистрибутива в `/boot/efi/EFI`. Это нужно указать явно.
- `EFI_LOADER=grubx64.efi`- указывает имя загрузчика EFI по умолчанию.
- `sbindir=/usr/bin` - установить `efibootmgr` в /usr/bin.


