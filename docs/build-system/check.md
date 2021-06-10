<pkg :name="'check'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'check'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'check'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'check'" :type="'test'"></package-script>

## Установка
<package-script :package="'check'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
