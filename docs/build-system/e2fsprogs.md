{{ include('../packages/e2fsprogs/README.md') }}

## Настройка

```bash 
{{ include('../packages/e2fsprogs/configure') }}
```

## При раздельной структуре каталогов

Добавьте к скрипту `configure` ключ `--bindir=/bin`.

### Значения параметров

`--enable-elf-shlibs` - создает общие библиотеки, которые используются некоторыми программами пакета.

`--disable-*` - исключает установку библиотек libuuid и libblkid, службы uuidd и fsck обертки, которые содержатся в пакете Util-Linux и являются более актуальными.

`--enable-symlink-install`, `--enable-relative-symlinks` - использовать относительные символические ссылки вместо жёстких.

## Сборка

```bash 
{{ include('../packages/e2fsprogs/build') }}
```

## Тестирование

```bash 
{{ include('../packages/e2fsprogs/test') }}
```

> Тесты могут занять довольно продолжительное время на HDD (около 4 SBU). На SSD же это будет быстрее - 1,5 SBU.

???+ warning "Предупреждение"

    Тест `m_rootdir_acl` может дать сбой.

## Установка

```bash 
{{ include('../packages/e2fsprogs/install') }}
```

Пакет установит запакованный файл .info и не обновит системный файл dir. Распакуйте файл и обновите файл dir, выполнив следующую команду:

```bash 
{{ include('../packages/e2fsprogs/postinstall') }}
```

При необходимости создайте и установите дополнительную документацию выполнив следующие команды:

```bash 
{{ include('../packages/e2fsprogs/install-doc') }}
```

## Установленные файлы

**Программы:** `badblocks`, `chattr`, `compile_et`, `debugfs`, `dumpe2fs`, `e2freefrag`, `e2fsck`, `e2image`, `e2label`, `e2mmpstatus`, `e2scrub`, `e2scrub_all`, `e2undo`, `e4crypt`, `e4defrag`, `filefrag`, `fsck.ext2`, `fsck.ext3`, `fsck.ext4`, `logsave`, `lsattr`, `mk_cmds`, `mke2fs`, `mkfs.ext2`, `mkfs.ext3`, `mkfs.ext4`, `mklost+found`, `resize2fs`, и `tune2fs`

**Библиотеки:**  `libcom_err.so`, `libe2p.so`, `libext2fs.so`, и `libss.so`

**Директории:**  `/usr/include/e2p`, `/usr/include/et`, `/usr/include/ext2fs`, `/usr/include/ss`, `/usr/lib/e2fsprogs`, `/usr/share/et`, и `/usr/share/ss`
