{{ include('../packages/binutils/README.md') }}

## Подготовка

Удалите проблемный тест:

```bash 
{{ include('../packages/binutils/prepare') }}
```

Примените патч 
```bash 
{{ include('../packages/binutils/patch') }}
```

<!-- temp solution TODO: Remove in next versions -->
Ошибка в системе сборки приводит к тому, что страницы руководства становятся пустыми. Можно обойти проблему, чтобы страницы руководства были созданы правильно:

```bash
sed -i '63d' etc/texi2pod.pl
find -name \*.1 -delete
```

## Настройка

```bash 
{{ include('../packages/binutils/configure') }}
```

### Для multilib

```bash 
{{ include('../packages/binutils/multi_configure') }}
```

### Значения параметров

`--enable-gold` - установить компоновщик `gold`.

`--enable-ld=default` - установить `ld` и `ld.bfd`.

`--enable-plugins` - включает поддержку плагинов для компоновщика.

`--enable-64-bit-bfd` - включает поддержку 64-битных систем.

`--with-system-zlib` - использовать системную версию `zlib`, а не включенную в пакет.

## Сборка

```bash 
{{ include('../packages/binutils/build') }}
```

## Тестирование

```bash 
{{ include('../packages/binutils/test') }}
```

???+ warning "Предупреждение"
	
	Известно, что четыре теста с меткой `Run property ...` могут дать сбои.

## Установка

```bash 
{{ include('../packages/binutils/install') }}
```

Удалите бесполезные статические библиотеки:

```bash 
{{ include('../packages/binutils/postinstall') }}
```

## Установленные файлы

Программы: addr2line, ar, as, c++filt, dwp, elfedit, gprof, ld, ld.bfd, ld.gold, nm, objcopy, objdump, ranlib, readelf, size, strings и strip

Библиотеки: libbfd.so, libctf.so, libctf-nobfd.so и libopcodes.so

Директории: /usr/lib/ldscripts
