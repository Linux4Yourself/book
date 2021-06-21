<pkg :name="'grep'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'grep'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'grep'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'grep'" :type="'build'"></package-script>

## Установка
<package-script :package="'grep'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
