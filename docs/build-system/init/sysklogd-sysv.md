<pkg :name="'sysklogd'" instsize showsbu2></pkg>

## Подготовка

Исправьте ошибку, приводящую к краху программы:

<package-script :package="'sysklogd'" :type="'prepare'"></package-script>

## Сборка

<package-script :package="'sysklogd'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'sysklogd'" :type="'test'"></package-script>

## Установка

<package-script :package="'sysklogd'" :type="'install'"></package-script>

## Настройка

Создайте конфигурационный файл:
<package-script :package="'sysklogd'" :type="'postinstall'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
