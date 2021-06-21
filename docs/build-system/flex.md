<pkg :name="'flex'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'flex'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'flex'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'flex'" :type="'test'"></package-script>

## Установка
<package-script :package="'flex'" :type="'install'"></package-script>

Некоторые программы обращаются к `lex`, а не `flex`, поэтому создайте ссылку:

<package-script :package="'flex'" :type="'postinstall'"></package-script>
 
## Установленные файлы

Программы: `flex`, `flex++` (ссылка на `flex`) и `lex` (ссылка на `flex`)

Библиотеки: `libfl.so`

<script>
	new Vue({ el: '#main' })
</script> 
