<pkg :name="'tar'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'tar'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'tar'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'tar'" :type="'test'"></package-script>

## Установка
<package-script :package="'tar'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
