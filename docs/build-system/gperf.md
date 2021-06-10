<pkg :name="'gperf'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'gperf'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'gperf'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'gperf'" :type="'test'"></package-script>

## Установка
<package-script :package="'gperf'" :type="'install'"></package-script>


<script>
	new Vue({ el: '#main' })
</script> 
