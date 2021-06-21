<pkg :name="'elfutils'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'elfutils'" :type="'configure'"></package-script>
## Сборка
<package-script :package="'elfutils'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'elfutils'" :type="'test'"></package-script>
## Установка
Потребуется только установка библиотеки `libelf`.
<package-script :package="'elfutils'" :type="'install'"></package-script>

## Для multilib

### Очистка
<package-script :package="'elfutils'" :type="'multi_prepare'"></package-script>
### Подготовка
<package-script :package="'elfutils'" :type="'multi_configure'"></package-script>

### Сборка 
<package-script :package="'elfutils'" :type="'multi_build'"></package-script>

### Установка
<package-script :package="'elfutils'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
