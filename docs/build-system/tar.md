<pkg :name="'tar'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'tar'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'tar'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'tar'" :type="'test'"></package-script>

> Тестирование добавляет 3 SBU ко всему времени установки пакета

?> Известно, что тест `store/restore` даёт сбой.

## Установка
<package-script :package="'tar'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
