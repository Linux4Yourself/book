<pkg :name="'p11-kit'" instsize showsbu2></pkg>
## Подготовка
<package-script :package="'p11-kit'" :type="'prepare'"></package-script>

## Настройка
<package-script :package="'p11-kit'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'p11-kit'" :type="'build'"></package-script>

## Установка
<package-script :package="'p11-kit'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
