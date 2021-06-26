
<package-info :package="package"></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('linux');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>
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
- `make menuconfig` – псевдографический режим
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

!> Убедитесь в том, что вы **включили/отключили/указали** указанные ниже параметры
настройки, в ином случае, система может работать неправильно, или вовсе не
загрузится:

```
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

```
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

FUSE (англ. filesystem in userspace — «файловая система в пользовательском пространстве») — свободный модуль для ядер Unix-подобных операционных систем, позволяет разработчикам создавать новые типы файловых систем, доступные для монтирования пользователями без привилегий (прежде всего — виртуальных файловых систем); это достигается за счёт запуска кода файловой системы в пользовательском пространстве, в то время как модуль FUSE предоставляет связующее звено для актуальных интерфейсов ядра. C использованием средств FUSE разработаны, в частности, SSHFS, NTFS-3G, GlusterFS, ZFS.

```
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

XFS — высокопроизводительная 64-битная журналируемая файловая система, созданная компанией Silicon Graphics для собственной операционной системы IRIX. 1 мая 2001 года Silicon Graphics выпустила XFS под GNU General Public License (Linux версия 2.2). XFS отличается от других файловых систем тем, что она изначально была рассчитана для использования на дисках большого объёма (более 2 терабайт).

```
File systems --->
  <*/M> XFS filesystem support [CONFIG_XFS_FS]

```

### LVM

При необходимости, включите поддержу LVM

LVM — это метод распределения пространства жёсткого диска по логическим томам, размер которых можно легко менять, в отличие от разделов.

С LVM пространство жёсткого диска или набора дисков распределяется по физическим томам. Физический том не может располагаться более чем на одном диске.

Физические тома собираются в группы логических томов, за исключением раздела /boot/. Раздел /boot/ не может находиться в группе логических томов, так как в этом случае загрузчику не удастся его прочитать. Если корневой раздел (/) находится на логическом томе, создайте отдельный раздел /boot/ вне группы томов.


```
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

Cryptographic API предлагает богатый набор криптографических шифров, а также другие механизмы и методы преобразования данных для их вызова. Cryptographic API предоставляет различные вызовы API для следующих типов шифров:

 - Симметричные шифры
 - Шифры AEAD
 - Дайджест сообщения, включая дайджест сообщения с ключом
 - Генерация случайных чисел
 - Интерфейс пользовательского пространства

```
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

```

### Драйверы устройств

В разделе `Device Drivers` - нужно пройтись по разделам и включить драйвера для своего оборудования -нестандартные жесткие диски, мышки, USB устройства, веб-камеры, Bluetooth, WIFI адаптеры, принтеры и т д.

Посмотреть какое оборудование подключено к вашей системе можно командой:

```bash
 lspci
```

## Сборка

Когда все параметры настроены, можно приступать к сборке.

Выполните комадну:

```bash
make
```

?> Обратите внимание что процесс сборки ядра может проходить длительное время (от 4.4 до 66.0 SBU) . Это во многом зависит от установленных параметров конфигурации.

Установите модули ядра:

```bash
make modules_install
```

## Установка

После завершения сборки, необходимо выполнить еще несколько шагов. Некоторые
файлы должны быть скопированы в каталог ``/boot``.

Путь к образу ядра зависит от используемой платформы. Имя файла, указанное ниже, может
иметь произвольное наименование, на ваш вкус, но имя файла должно начинаться с ``vmlinuz``
для обеспечения совместимости автоматической настройки процесса загрузки. При выполнении следующей команды, будет считаться что используется
архитектура x86:

<pre class="pre">
cp -iv arch/x86/boot/bzImage /boot/vmlinuz-{{ package.version }}-my-kernel
</pre>

``System.map`` файл, внутри которого находится символьная таблица адресов функций и
процедур, используемых ядром операционной системы Linux. В этой таблице перечислены
имена переменных и функций и их адреса в памяти компьютера. Эта таблица весьма полезна
при отладке ядра в случае Kernel panic или Linux oops. System.map генерируется при компиляции
ядра. Выполните следующую команду для установки файла System.map :

<pre class="pre">
cp -iv System.map /boot/System.map-{{ package.version }}
</pre>

Файл конфигурации ядра ``.config`` полученный в результате настройки ``make menuconfig``
содержит в себе все опции конфигурации скомпилированного ядра. Хорошей идеей будет
оставить этот файл для будующей работы:

<pre class="pre">
cp -iv .config /boot/config-{{ package.version }}
</pre>

Для облегчения обновления ядра создайте символическую ссылку:

<pre class="pre">
ln -svf vmlinuz-{{ package.version }}-my-kernel /boot/vmlinuz
</pre>

При обновлении ядра будет достаточно установить новую версию и обновить символическую ссылку.

## Установка документации

Установите документацию, если она необходима

<pre class="pre">
install -d /usr/share/doc/linux-{{ package.version }}
cp -rv Documentation/* /usr/share/doc/linux-{{ package.version }}
</pre>

## Настройка каталога с исходным кодом

Важно отметить, что файлы в каталоге исходных кодов ядра не принадлежат пользователю
``root``. Всякий раз, когда пакет распаковывается от пользователя ``root`` (как это и выполнялось
внутри среды ``chroot``), файлы имеют те идентификаторы пользователя и группы, которые были
назначены при распаковке. Обычно это не вызывает проблем для других устанавливаемых
пакетов, так как каталог с исходными кодами удаляется после установки пакета. Однако
исходный код ядра Linux часто сохраняется в течение длительного времени. Из-за этого существует вероятность того, что идентификатор пользователя, используемый при распаковке,
будет назначен другому пользователю. В таком случае, этот пользователь будет иметь доступ на
запись в этот каталог.

?> Во многих случаях конфигурация ядра должна быть обновлена для пакетов, которые
будут установлены вами позднее. В отличие от других пакетов удалять дерево исходного
кода ядра не требуется после компиляции и установки.

Если вы планируете оставить каталог с исходным кодом ядра, выполните команду:

<pre class="pre">
chown -R 0:0 /usr/src/linux-{{ package.version }}
</pre>

!> Заголовочные файлы расположенные в системном каталоге ``/usr/include``  должны
всегда быть те, которые использовались при компиляции ``Glibc``. Их никогда не следует заменять на чистые
заголовочные файлы ядра или любые другие подготовленные заголовочные файлы.

## Настройка порядка загрузки модулей Linux

Обычно модули Linux загружаются автоматически, но иногда требуется определенный порядок.
Программа, которая загружает модули, ``modprobe`` или ``insmod``, использует файл ``/etc/
modprobe.d/usb.conf`` как раз для этой цели. Этот файл должен быть создан так, что
если USB-драйверы (``ehci_hcd``, ``ohci_hcd`` и ``uhci_hcd``) были созданы в виде модулей, то они будут
загружены в требуемом порядке: ``ehci_hcd`` должен быть загружен до ``ohci_hcd`` и ``uhci_hcd`` для того,
чтобы избежать предупреждений во время загрузки.

Создайте новый файл ``/etc/modprobe.d/usb.conf`` выполнив следующую команду:

<common-script :name="'modprobe'"></common-script>

<script>
	new Vue({ el: '#main' })
</script> 
