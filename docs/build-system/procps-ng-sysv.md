<pkg :name="'procps-ng'" instsize showsbu2></pkg>
## Настройка
<package-script :package="'procps-ng'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'procps-ng'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'procps-ng'" :type="'test'"></package-script>

?> Пять тестов, связанных с `pkill` дают сбои, так как они (тесты) не были обновлены.

## Установка
<package-script :package="'procps-ng'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
