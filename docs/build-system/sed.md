<pkg :name="'sed'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'sed'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'sed'" :type="'build'"></package-script>

## Сборка документации

<package-script :package="'sed'" :type="'build-doc'"></package-script>

## Тестирование

<package-script :package="'sed'" :type="'test'"></package-script>

## Установка

<package-script :package="'sed'" :type="'install'"></package-script>

## Установка документации

<package-script :package="'sed'" :type="'install-doc'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
