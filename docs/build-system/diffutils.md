<pkg :name="'diffutils'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'diffutils'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'diffutils'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'diffutils'" :type="'test'"></package-script>

## Установка
<package-script :package="'diffutils'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
