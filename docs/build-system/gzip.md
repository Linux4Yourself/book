<pkg :name="'gzip'" instsize showsbu2></pkg>
## Настройка
<package-script :package="'gzip'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'gzip'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'gzip'" :type="'test'"></package-script>

## Установка
<package-script :package="'gzip'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
