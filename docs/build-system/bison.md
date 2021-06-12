<pkg :name="'bison'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'bison'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'bison'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'bison'" :type="'build'"></package-script>

> Добавляет примерно 5,5 SBU к общему времени установки пакета

## Установка
<package-script :package="'bison'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
