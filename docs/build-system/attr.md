<pkg :name="'attr'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'attr'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'attr'" :type="'build'"></package-script>
## Тестирование

!> Тестирование нужно производить на файловой системе, поддерживающей расширенные атрибуты. Например, ext2-ext4.

<package-script :package="'attr'" :type="'test'"></package-script>

## Установка
<package-script :package="'attr'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'attr'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'attr'" :type="'multi_configure'"></package-script>

### Сборка 
<package-script :package="'attr'" :type="'multi_build'"></package-script>
### Установка

<package-script :package="'attr'" :type="'multi_install'"></package-script>

## Установленные файлы

Программы: attr getfattr setfattr

Библиотеки: libattr.so


<script>
	new Vue({ el: '#main' })
</script> 
