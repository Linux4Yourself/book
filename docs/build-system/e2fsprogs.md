{{ include('../packages/e2fsprogs/README.md') }}

## Настройка

```bash 
{{ include('../packages/e2fsprogs/configure') }}
```

## При раздельной структуре каталогов

Добавьте к скрипту `configure` ключ `--bindir=/bin`.

### Значения параметров

`--enable-elf-shlibs`
Это создает общие библиотеки, которые используются некоторыми программами пакета.

`--disable-*`
Исключает установку библиотек libuuid и libblkid, службы uuidd и fsck обертки, которые содержатся в пакете Util-Linux и являются более актуальными.

`--enable-symlink-install` `--enable-relative-symlinks` - использовать относительные символические ссылки вместо жёстких.

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


