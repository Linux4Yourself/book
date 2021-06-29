<pkg :name="'attr'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'acl'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'acl'" :type="'build'"></package-script>

## Установка

<package-script :package="'acl'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'acl'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'acl'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'acl'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'acl'" :type="'multi_install'"></package-script>

## Установленные файлы

Программы: chacl, getfacl, setfacl

Библиотеки: libacl.so

<script>
	new Vue({ el: '#main' })
</script>
