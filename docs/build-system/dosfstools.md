<pkg :name="'dosfstools'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'dosfstools'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'dosfstools'" :type="'build'"></package-script>

## Установка

<package-script :package="'dosfstools'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
