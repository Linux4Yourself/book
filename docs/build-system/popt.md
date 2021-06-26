<pkg :name="'popt'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'popt'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'popt'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'popt'" :type="'test'"></package-script>

## Установка

<package-script :package="'popt'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
