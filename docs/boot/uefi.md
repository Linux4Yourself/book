# Создание загрузочной системы EFI

!> Отключите безопасную загрузку! На данный момент, её нет поддержки нет. Чтобы настроить процесс загрузки с помощью GRUB для UEFI, необходимо отключить её в интерфейсе конфигурации прошивки. Прочтите документацию, предоставленную производителем вашей системы, чтобы узнать, как это сделать.

Убедитесь, что вы не пропустили раздел по настройке ядра, для поддержки <a href="#/kernel/kernel-setup?id=efi">EFI</a>.

## Поиск, или создание системного раздела EFI

В системе на основе EFI загрузчики устанавливаются в специальный раздел FAT32, называемый системным разделом EFI (ESP). Если ваша система поддерживает EFI и предустановлен дистрибутива Linux и (или) Windows, скорее всего, ESP уже создан. Посмотрите все разделы на вашем жестком диске (замените `sda` на устройство, на необходимый):

```bash
fdisk -l /dev/sda
```

Столбец ESP `type` должен быть `EFI System`.

Например:
```
Устр-во    начало     Конец   Секторы Размер Тип
/dev/sda1    4096    618495    614400   300M EFI
/dev/sda2  618496 268430084 267811589 127,7G Файловая система Linux

```
Если система или жесткий диск новые, или если вы впервые устанавливаете ОС, загружаемую через `UEFI`, `ESP` может не существовать. В этом случае создайте новый раздел, создайте на нем файловую систему `vfat` и установите тип раздела `EFI system`.

!> Некоторые (старые) реализации `UEFI` могут требовать, чтобы ESP был первым разделом на диске.

Создайте точку монтирования для `ESP` и смонтируйте ее (замените `sda1` на соответствующий `ESP`):

```bash
mkdir -pv /boot/efi &&
mount -v -t vfat /dev/sda1 /boot/efi
```

Добавьте запись для `ESP` в `/etc/fstab`, чтобы он автоматически монтировался во время загрузки системы: 

```bash
cat >> /etc/fstab << EOF
/dev/sda1 /boot/efi vfat defaults 0 1
EOF
```

## Монтирование EFI Variable File System

Для установки GRUB на UEFI необходимо смонтировать файловую систему EFI Variable, `efivarfs`. Если она еще не была смонтирована ранее, выполните команду:

```bash
mountpoint /sys/firmware/efi/efivars || mount -v -t efivarfs efivarfs /sys/firmware/efi/efivars
```

Добавьте запись для `efivarfs` в `/etc/fstab`, чтобы она автоматически монтировалась во время загрузки системы:

```bash
cat >> /etc/fstab << EOF
efivarfs /sys/firmware/efi/efivars efivarfs defaults 0 0
EOF
```

!> Если система не загружается с UEFI, каталог `/sys/firmware/efi` будет отсутствовать. В этом случае вы должны загрузить систему в режиме `UEFI` с аварийным загрузочным диском.

## Настройка
В системах на основе UEFI GRUB работает устанавливая приложение EFI (особый вид исполняемого файла) в `/boot/efi/EFI/[id sizes/grubx64.efi`, где `/boot/efi` - точка монтирования `ESP`, а `[id]` заменяется идентификатором, указанным в командной строке `grub-install`. `GRUB` создаст запись в переменных `EFI`, содержащую путь `EFI/[id]/grubx64.efi`, чтобы прошивка `EFI` могла найти `grubx64.efi` и загрузить его.

`grubx64.efi` очень легкий (136 КБ), поэтому он не будет занимать много места в ESP. Типичный размер ESP составляет 100 МБ (для диспетчера загрузки Windows, который использует около 50 МБ в ESP). Как только grubx64.efi загружен прошивкой, он загрузит модули GRUB в загрузочный раздел. Расположение по умолчанию - `/boot/grub`.

Установите файлы GRUB в ``/boot/efi/EFI/LFS/grubx64.efi`` и  `/boot/grub`. Затем настройте загрузочную запись в переменных EFI:

```bash
grub-install --bootloader-id=LIN --recheck
```

Если установка прошла успешно, вывод должен быть:

```
Installing for x86_64-efi platform.
Installation finished. No error reported.
```

Запустите `efibootmgr`, чтобы еще раз проверить конфигурацию загрузки EFI.

```bash
efibootmgr
```

Пример вывода:

```
BootCurrent: 0000
Timeout: 1 seconds
BootOrder: 0005,0000,0002,0001,0003,0004
Boot0000* ARCH
Boot0001* UEFI:CD/DVD Drive
Boot0002* Windows Boot Manager
Boot0003* UEFI:Removable Device
Boot0004* UEFI:Network Device
Boot0005* LIN
```

Обратите внимание, что `0005` является первым в `BootOrder`, а `Boot0005` - это `LIN`. Это означает, что при следующей загрузке системы будет использоваться версия `GRUB`, установленная в `LIN`.

# Создание файла конфигурации GRUB
Создайте `/boot/grub/grub.cfg` для настройки меню загрузки GRUB:

```bash
cat > /boot/grub/grub.cfg << EOF
# Begin /boot/grub/grub.cfg
set default=0
set timeout=5

insmod part_gpt
insmod ext2
set root=(hd0,2)

if loadfont /boot/grub/fonts/unicode.pf2; then
  set gfxmode=auto
  insmod all_video
  terminal_output gfxterm
fi

menuentry "GNU/Linux, Linux 5.10.17-lfs-10.1"  {
  linux   /boot/vmlinuz root=/dev/sda2 ro
}

menuentry "Firmware Setup" {
  fwsetup
}
EOF
```
`(hd0,2)`, `sda2`  следует заменить в соответствии с вашей конфигурацией.

?> Для GRUB, файлы используются относительно раздела. Если вы использовали отдельный раздел `/boot`, удалите `/boot` из указанных выше путей (к ядру и к unicode.pf2). Вам также нужно будет изменить строку корневого раздела, чтобы она указывала на загрузочный раздел.

## Загрузка вместе с Windows

Добавьте запись в файл конфигурации `grub.cfg`:

```bash
cat >> /boot/grub/grub.cfg << EOF
# Begin Windows addition

menuentry "Windows 10" {
  insmod fat
  insmod chain
  set root=(hd0,1)
  chainloader /EFI/Microsoft/Boot/bootmgfw.efi
}
EOF
```

(hd0,1) следует заменить назначенным GRUB именем для ESP. Директива `chainloader` может использоваться, чтобы указать GRUB запустить другой исполняемый файл EFI, в данном случае диспетчер загрузки Windows. Вы можете поместить больше используемых инструментов в исполняемом формате EFI (например, оболочку EFI) в ESP и создать для них записи GRUB.
