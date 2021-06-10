<pkg :name="'elfutils'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'libelf'" :type="'configure'"></package-script>
## Сборка
<package-script :package="'libelf'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'libelf'" :type="'test'"></package-script>
## Установка
Потребуется только установка библиотеки `libelf`.
<package-script :package="'libelf'" :type="'install'"></package-script>

## Для multilib

### Очистка
<package-script :package="'libelf'" :type="'multi_prepare'"></package-script>
### Подготовка
<package-script :package="'libelf'" :type="'multi_configure'"></package-script>

### Сборка 
<package-script :package="'libelf'" :type="'multi_build'"></package-script>

### Установка
<package-script :package="'libelf'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
