<pkg :name="'gmp'" instsize showsbu2></pkg>

## Настройка

По умолчанию gmp оптимизируется под ваш процессор. Для того, чтобы её можно было запустить на другом процессоре, выполните:
<package-script :package="'gmp'" :type="'prepare'"></package-script>

```bash
./configure --prefix=/usr    \
            --disable-static   --enable-cxx
```

### Значения параметров

`--enable-cxx` - Собрать библиотеку C++

## Сборка

<package-script :package="'gmp'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'gmp'" :type="'test'"></package-script>

## Установка

<package-script :package="'gmp'" :type="'install'"></package-script>

## Для multilib

### Очистка и подготовка

<package-script :package="'gmp'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'gmp'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'gmp'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'gmp'" :type="'multi_install'"></package-script>

---

!> Код gmp сильно оптимизирован для процессора, на котором построен. Изредка, если система LX4 была перенесена на ПК с другим процессором, при компиляции может выдавать ошибки `Illegal instruction` и прерывать сборку программы. Чтобы этого избежать, перекомпилируйте пакет `gmp`, добавив опцию `--build=x86_64-pc-linux-gnu`.

## Установленные файлы

Библиотеки: libgmp.so libgmpxx.so

<script>
	new Vue({ el: '#main' })
</script>
