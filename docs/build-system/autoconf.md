<pkg :name="'autoconf'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'autoconf'" :type="'configure'"></package-script>
## Сборка

<package-script :package="'autoconf'" :type="'build'"></package-script>
## Тестирование

<package-script :package="'autoconf'" :type="'test'"></package-script>

## Установка

<package-script :package="'autoconf'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
