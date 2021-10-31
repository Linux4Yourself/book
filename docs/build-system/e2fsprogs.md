{{ include('../packages/e2fsprogs/README.md') }}

## Настройка

{{ include('../packages/e2fsprogs/configure') }}

## При раздельной структуре каталогов

Добавьте к скрипту `configure` ключ `--bindir=/bin`.

### Значения параметров

`--enable-elf-shlibs`
Это создает общие библиотеки, которые используются некоторыми программами пакета.

`--disable-*`
Исключает установку библиотек libuuid и libblkid, службы uuidd и fsck обертки, которые содержатся в пакете Util-Linux и являются более актуальными.

`--enable-symlink-install` `--enable-relative-symlinks` - использовать относительные символические ссылки вместо жёстких.

## Сборка

{{ include('../packages/e2fsprogs/build') }}

## Тестирование

{{ include('../packages/e2fsprogs/test') }}

> Тесты могут занять довольно продолжительное время на HDD (около 4 SBU). На SSD же это будет быстрее - 1,5 SBU.

???+ warning "Предупреждение"

    Тест `m_rootdir_acl` может дать сбой.

## Установка

{{ include('../packages/e2fsprogs/install') }}

Пакет установит запакованный файл .info и не обновит системный файл dir. Распакуйте файл и обновите файл dir, выполнив следующую команду:

{{ include('../packages/e2fsprogs/postinstall') }}

При необходимости создайте и установите дополнительную документацию выполнив следующие команды:

{{ include('../packages/e2fsprogs/install-doc') }}


