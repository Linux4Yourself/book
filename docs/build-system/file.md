<pkg :name="'file'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'file'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'file'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'file'" :type="'test'"></package-script>

## Установка

<package-script :package="'file'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'file'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'file'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'file'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'file'" :type="'multi_install'"></package-script>

## Установленные файлы

Программы: file

Библиотеки: libmagic.so

<script>
	new Vue({ el: '#main' })
</script>
