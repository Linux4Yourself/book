<pkg :name="'e2fsprogs'" instsize showsbu2></pkg>

## Настройка

[filename](../packages/e2fsprogs/configure ':include')

## При раздельной структуре каталогов

Добавьте к скрипту `configure` ключ `--bindir=/bin`.

### Значения параметров

`--enable-elf-shlibs`
Это создает общие библиотеки, которые используются некоторыми программами пакета.

`--disable-*`
Исключает установку библиотек libuuid и libblkid, службы uuidd и fsck обертки, которые содержатся в пакете Util-Linux и являются более актуальными.

`--enable-symlink-install` `--enable-relative-symlinks` - использовать относительные символические ссылки вместо жёстких.

## Сборка

[filename](../packages/e2fsprogs/build ':include')

## Тестирование

[filename](../packages/e2fsprogs/test ':include')

> Тесты могут занять довольно продолжительное время на HDD (около 4 SBU). На SSD же это будет быстрее - 1,5 SBU.

???+ warning

    Тест `m_rootdir_acl` может дать сбой.

## Установка

[filename](../packages/e2fsprogs/install ':include')

Пакет установит запакованный файл .info и не обновит системный файл dir. Распакуйте файл и обновите файл dir, выполнив следующую команду:

[filename](../packages/e2fsprogs/postinstall ':include')

При необходимости создайте и установите дополнительную документацию выполнив следующие команды:

[filename](../packages/e2fsprogs/install-doc ':include')

<script>
	new Vue({ el: '#main' })
</script>
