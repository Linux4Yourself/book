<pkg :name="'make'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'make'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'make'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'make'" :type="'test'"></package-script>

## Установка

<package-script :package="'make'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
