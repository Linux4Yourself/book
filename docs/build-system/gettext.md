<pkg :name="'gettext'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'gettext'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'gettext'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'gettext'" :type="'build'"></package-script>

> Тестирование добавляет +3 SBU ко всему времени установки пакета.

## Установка
<package-script :package="'gettext'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
