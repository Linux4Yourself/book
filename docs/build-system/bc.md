<pkg :name="'bc'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'bc'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'bc'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'bc'" :type="'test'"></package-script>

## Установка

<package-script :package="'bc'" :type="'install'"></package-script>

## Установленные файлы

Программы: `bc` и `dc`

<script>
	new Vue({ el: '#main' })
</script>
