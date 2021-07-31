<pkg :name="'binutils'" instsize showsbu2></pkg>

## Подготовка

Удалите проблемный тест:

<package-script :package="'binutils'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'binutils'" :type="'configure'"></package-script>

### Для multilib

<package-script :package="'binutils'" :type="'multi_configure'"></package-script>

### Значения параметров

`--enable-gold` - установить компоновщик `gold`.

`--enable-ld=default` - установить `ld` и `ld.bfd`.

`--enable-plugins` - включает поддержку плагинов для компоновщика.

`--enable-64-bit-bfd` - включает поддержку 64-битных систем.

`--with-system-zlib` - использовать системную версию `zlib`, а не включенную в пакет.

## Сборка

<package-script :package="'binutils'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'binutils'" :type="'test'"></package-script>

?> Известно, что четыре теста с меткой `Run property ...` могут дать сбои.

## Установка

<package-script :package="'binutils'" :type="'install'"></package-script>

Удалите бесполезные статические библиотеки:

<package-script :package="'binutils'" :type="'postinstall'"></package-script>

## Установленные файлы

Программы: addr2line, ar, as, c++filt, dwp, elfedit, gprof, ld, ld.bfd, ld.gold, nm, objcopy, objdump, ranlib, readelf, size, strings и strip

Библиотеки: libbfd.so, libctf.so, libctf-nobfd.so и libopcodes.so

Директории: /usr/lib/ldscripts

<script>
	new Vue({ el: '#main' })
</script>
