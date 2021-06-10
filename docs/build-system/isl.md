<pkg :name="'isl'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'isl'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'isl'" :type="'build'"></package-script>

## Установка
<package-script :package="'isl'" :type="'install'"></package-script>

Переместите неправильно установленные файлы:

<package-script :package="'isl'" :type="'postinstall'"></package-script>
 
## Установленные файлы

Библиотеки: libmpc.so

<script>
	new Vue({ el: '#main' })
</script> 
