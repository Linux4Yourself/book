<pkg :name="'e2fsprogs'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'e2fsprogs'" :type="'configure'"></package-script>

### Значения параметров

``--enable-elf-shlibs``
Это создает общие библиотеки, которые используются некоторыми программами пакета.

``--disable-*``
Исключает установку библиотек libuuid и libblkid, службы uuidd,и fsck обертки, которые содержатся в пакете Util-Linux и являются более актуальными.

``--enable-symlink-install`` ``--enable-relative-symlinks`` - Использовать относительные символические ссылки вместо жеских

## Сборка
<package-script :package="'e2fsprogs'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'e2fsprogs'" :type="'test'"></package-script>

## Установка
<package-script :package="'e2fsprogs'" :type="'install'"></package-script>

Пакет установит запакованный файл .info и не обновит системный файл dir. Распакуйте файл и обновите файл dir, выполнив следующую команду:
<package-script :package="'e2fsprogs'" :type="'postinstall'"></package-script>

При необходимости создайте и установите дополнительную документацию выполненив следующие команды:
<package-script :package="'e2fsprogs'" :type="'install-doc'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
