<pkg :name="'tcl'" instsize showsbu2></pkg>

[filename](../shared/test-pkgs.md ':include')
## Настройка
<package-script :package="'tcl'" :type="'configure'"></package-script>
## Сборка
<package-script :package="'tcl'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'tcl'" :type="'test'"></package-script>

?> В результатах теста есть несколько мест, связанных с `clock.test`, которые указывают на сбой, но сводка в конце указывает никаких ошибок. `clock.test` проходит на полной системе LX4. 

## Установка
<package-script :package="'tcl'" :type="'install'"></package-script>

Сделайте установленную библиотеку доступной для записи, чтобы отладочные символы можно было удалить позже, сделайте необходимую символическую ссылку и переименуйте страницу руководства, которая конфликтует со страницей руководства Perl:

<package-script :package="'tcl'" :type="'postinstall'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
