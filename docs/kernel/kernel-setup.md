# Настройка

В данной главе подробно рассказано о настройке ядра из исходного кода.

## Подготовка

Подготовьте пакет к компиляции выполнив следующую команду:

```bash
make mrproper
```

Выполнение этой команды гарантирует, что дерево исходных кодов ядра абсолютно чистое.
Разработчики ядра рекомендуют, чтобы эта команда выполнялась перед каждым процессом
компиляции. 

!> Обратите внимание что после распаковки пакета с исходным кодом не следует
полагаться на его "чистоту".

## Инструменты настройки параметров ядра

Конфигурация  ядра хранится в файле ``.config``. Именно этот файл следует отредактировать, указав необходимые опции, в соответствии с вашим оборудованием и предпочтениями. 

Для наглядности и облегчения вопсприятия, настройку ядра можно произвести при помощий утилит предоставляющих графический или псевдографический интерфейс:

- `make xconfig` – при использовании графической среды KDE
- `make gconfig` – при использовании графической среды GNOME
- `make menuconfig` – псевдографический режиме
- `make config` –  вариант настройки, выводящий запросы на задание значений каждого параметра ядра. (Не позволяет изменить уже заданные параметры)

Практически все варианты (за исключением последнего) позволяют получать краткую справку по каждому параметру, производить поиск нужного параметра (или раздела), добавлять в конфигурацию дополнительные компоненты, драйверы, а также показывают, каким образом конкретный компонент может быть сконфигурирован — как компонент, встроенный в ядро или как загружаемый модуль, а также поддерживает ли он вообще вариант компиляции в качестве загружаемого модуля.

## Создание конфигурации

Хорошей отправной точкой для настройки ядра, может стать запуск команды ``make defconfig``.

Выполните команду:

```bash
make defconfig
```
Будет создана базовая конфигурация с настройками по умолчанию, с учётом архитектуры машины. Параметры берутся из архитектурно-зависимых ``defconfig`` файлов. 

## Настройка параметров

!> Убедитесь в том, что вы включили/отключили/указали указанные ниже параметры
настройки, в ином случае, система может работать не правильно, или вовсе не
загрузится:

```bash
General setup -->
   [ ] Auditing Support [CONFIG_AUDIT]
   [*] Control Group support [CONFIG_CGROUPS]
   [ ] Enable deprecated sysfs features to support old userspace tools [CONFIG_SYSFS_DEPRECATED]
   [*] Configure standard kernel features (expert users) [CONFIG_EXPERT] --->         
      [*] open by fhandle syscalls [CONFIG_FHANDLE]
Processor type and features  --->
   [*] Enable seccomp to safely compute untrusted bytecode [CONFIG_SECCOMP]
Firmware Drivers  --->
   [*] Export DMI identification via sysfs to userspace [CONFIG_DMIID]
Networking support --->        [CONFIG_NET]
      Networking options --->
        <*> Packet socket          [CONFIG_PACKET]
        <*> The IPv6 Protocol ---> [CONFIG_IPV6]
Device Drivers  --->
  Generic Driver Options  --->
   [ ] Support for uevent helper [CONFIG_UEVENT_HELPER]
   [*] Maintain a devtmpfs filesystem to mount at /dev [CONFIG_DEVTMPFS]
   Firmware Loader --->
      [ ] Enable the firmware sysfs fallback mechanism [CONFIG_FW_LOADER_USER_HELPER]
File systems  --->
   [*] Inotify support for userspace [CONFIG_INOTIFY_USER]
  Pseudo filesystems  --->
   [*] Tmpfs POSIX Access Control Lists [CONFIG_TMPFS_POSIX_ACL]
```

?> указанные ниже параметры используйте на своё усмотрение.


### Поддержка файловых систем

Обратите внимание на раздел `File systems`. Включите поддержку требуемых файловых систем. Обязательно включите  The Extended 4 (ext4) filesystem для её поддержки.

### EFI
Если вы будете использовать EFI, необходимо обеспечить его поддержку:

```bash
Processor type and features --->
  [*] EFI runtime service support                              [CONFIG_EFI]
  [*]   EFI stub support                                       [CONFIG_EFI_STUB]
Firmware Drivers --->
  EFI (Extensible Firmware Interface) Support --->
    < > EFI Variable Support via sysfs                         [CONFIG_EFI_VARS]
    [*] Export efi runtime maps to sysfs                       [CONFIG_EFI_RUNTIME_MAP]
Enable the block layer --->
  Partition Types --->
    [*] Advanced partition selection                           [CONFIG_PARTITION_ADVANCED]
    [*] EFI GUID Partition support                             [CONFIG_EFI_PARTITION]
Device Drivers --->
  Graphics support --->
    Frame buffer Devices --->
      Support for frame buffer devices --->                    [CONFIG_FB]
        [*] EFI-based Framebuffer support                      [CONFIG_FB_EFI]
    Console display driver support --->
      [*] Framebuffer Console support                          [CONFIG_FRAMEBUFFER_CONSOLE]
File systems --->
  Pseudo filesystems --->
    <*/M> EFI Variable filesystem                              [CONFIG_EFIVAR_FS]

```
### FUSE

```bash
File systems  --->
  <*/M> FUSE (Filesystem in Userspace) support [CONFIG_FUSE_FS]
```
### Файловые системы Windows

```bash
File systems --->
  <DOS/FAT/EXFAT/NT Filesystems --->
    <*/M> MSDOS fs support             [CONFIG_MSDOS_FS]
    <*/M> VFAT (Windows-95) fs support [CONFIG_VFAT_FS]

```
### XFS

```bash
File systems --->
  <*/M> XFS filesystem support [CONFIG_XFS_FS]

```

### LVM

При необходимости, включите поддержу LVM

LVM — это метод распределения пространства жёсткого диска по логическим томам, размер которых можно легко менять, в отличие от разделов.

С LVM пространство жёсткого диска или набора дисков распределяется по физическим томам. Физический том не может располагаться более чем на одном диске.

Физические тома собираются в группы логических томов, за исключением раздела /boot/. Раздел /boot/ не может находиться в группе логических томов, так как в этом случае загрузчику не удастся его прочитать. Если корневой раздел (/) находится на логическом томе, создайте отдельный раздел /boot/ вне группы томов.


```bash
Device Drivers --->
  [*] Multiple devices driver support (RAID and LVM) ---> [CONFIG_MD]
    <*/M>   Device mapper support                         [CONFIG_BLK_DEV_DM]
    <*/M>   Crypt target support                          [CONFIG_DM_CRYPT]
    <*/M>   Snapshot target                               [CONFIG_DM_SNAPSHOT]
    <*/M>   Thin provisioning target                      [CONFIG_DM_THIN_PROVISIONING]
    <*/M>   Mirror target                                 [CONFIG_DM_MIRROR]
Kernel hacking --->
  Generic Kernel Debugging Instruments --->
    [*] Magic SysRq key                                   [CONFIG_MAGIC_SYSRQ]

```
### Cryptographic API

```bash
Device Drivers  --->          
  [*] Multiple devices driver support (RAID and LVM) ---> [CONFIG_MD]
       <*/M> Device mapper support                        [CONFIG_BLK_DEV_DM]
       <*/M> Crypt target support                         [CONFIG_DM_CRYPT]

Cryptographic API  --->                                    
  <*/M> XTS support                                       [CONFIG_CRYPTO_XTS]
  <*/M> SHA224 and SHA256 digest algorithm                [CONFIG_CRYPTO_SHA256]
  <*/M> AES cipher algorithms                             [CONFIG_CRYPTO_AES]
  <*/M> User-space interface for symmetric key cipher algorithms
                                                          [CONFIG_CRYPTO_USER_API_SKCIPHER]
  For tests:
  <*/M> Twofish cipher algorithm                          [CONFIG_CRYPTO_TWOFISH]

````


### Драйверы устройств

В разлделе `Device Drivers` - нужно пройтись по разделам и включить драйвера для своего оборудования -нестандартные жесткие диски, мышки, USB устройства, веб-камеры, Bluetooth, WIFI адаптеры, принтеры и т д.

Посмотреть какое оборудование подключено к вашей системе можно командой:

```bash
 lspci
```


</script>
