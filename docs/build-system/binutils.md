{{ include('../packages/binutils/README.md') }}

## Подготовка

Удалите проблемный тест:

{{ include('../packages/binutils/prepare') }}

<!-- temp solution TODO: Remove in next versions -->
Ошибка в системе сборки приводит к тому, что страницы руководства становятся пустыми. Можно обойти проблему, чтобы страницы руководства были созданы правильно:

```bash
sed -i '63d' etc/texi2pod.pl
find -name \*.1 -delete
```

## Настройка

{{ include('../packages/binutils/configure') }}

### Для multilib

{{ include('../packages/binutils/multi_configure') }}

### Значения параметров

`--enable-gold` - установить компоновщик `gold`.

`--enable-ld=default` - установить `ld` и `ld.bfd`.

`--enable-plugins` - включает поддержку плагинов для компоновщика.

`--enable-64-bit-bfd` - включает поддержку 64-битных систем.

`--with-system-zlib` - использовать системную версию `zlib`, а не включенную в пакет.

## Сборка

{{ include('../packages/binutils/build') }}

## Тестирование

{{ include('../packages/binutils/test') }}
<package-script :package="'binutils'" :type="'test'"></package-script>

???+ warning
	
	Известно, что четыре теста с меткой `Run property ...` могут дать сбои.

## Установка

{{ include('../packages/binutils/install') }}

Удалите бесполезные статические библиотеки:

{{ include('../packages/binutils/postinstall') }}

## Установленные файлы

Программы: addr2line, ar, as, c++filt, dwp, elfedit, gprof, ld, ld.bfd, ld.gold, nm, objcopy, objdump, ranlib, readelf, size, strings и strip

Библиотеки: libbfd.so, libctf.so, libctf-nobfd.so и libopcodes.so

Директории: /usr/lib/ldscripts
