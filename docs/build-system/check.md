<pkg :name="'check'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'check'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'check'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'check'" :type="'test'"></package-script>

> Тесты добавляют 4 SBU ко всему времени установки пакета.

## Установка

<package-script :package="'check'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
