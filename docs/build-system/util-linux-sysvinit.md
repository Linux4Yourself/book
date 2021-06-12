<pkg :name="'util-linux'" instsize showsbu2></pkg>
## Настройка
<package-script :package="'util-linux'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'util-linux'" :type="'build'"></package-script>

## Тестирование

!> Тестирование пакета от имени пользователя `root` может сломать Вашу систему. Для того, чтобы этого не случилось, производите тесты от имени непривилегированного пользователя:

<package-script :package="'util-linux'" :type="'test'"></package-script>

## Установка
<package-script :package="'util-linux'" :type="'install'"></package-script>
 
## Для multilib

### Очистка

<package-script :package="'util-linux'" :type="'multi_prepare'"></package-script>

### Настройка
<package-script :package="'util-linux'" :type="'multi_configure'"></package-script>

### Сборка 
<package-script :package="'util-linux'" :type="'multi_build'"></package-script>

### Установка
<package-script :package="'util-linux'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
