<pkg :name="'nano'" instsize showsbu2></pkg>
## Настройка
<package-script :package="'nano'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'nano'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'nano'" :type="'test'"></package-script>

## Установка
<package-script :package="'nano'" :type="'install'"></package-script>

## Установка документации
<package-script :package="'nano'" :type="'install-doc'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
