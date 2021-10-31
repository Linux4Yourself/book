<pkg :name="'efibootmgr'" instsize showsbu2></pkg>

## Подготовка

Исправьте ошибку сборки:
<package-script :package="'efibootmgr'" :type="'prepare'"></package-script>

## Сборка

<package-script :package="'efibootmgr'" :type="'build'"></package-script>

## Установка

<package-script :package="'efibootmgr'" :type="'install'"></package-script>

## Значения новых команд

- `EFIDIR=LIN`- указывает имя подкаталога дистрибутива в `/boot/efi/EFI`. Это нужно указать явно.
- `EFI_LOADER=grubx64.efi`- указывает имя загрузчика EFI по умолчанию.
- `sbindir=/usr/bin` - установить `efibootmgr` в /usr/bin.


