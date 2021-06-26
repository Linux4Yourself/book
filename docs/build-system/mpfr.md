<pkg :name="'mpfr'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'mpfr'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'mpfr'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'mpfr'" :type="'test'"></package-script>

## Установка

<package-script :package="'mpfr'" :type="'install'"></package-script>

## Установленные файлы

Библиотеки: libmpfr.so

<script>
	new Vue({ el: '#main' })
</script>
