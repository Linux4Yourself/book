<pkg :name="'automake'" instsize showsbu2></pkg>

## Настройка
Внесите исправление для некорректного теста:
<package-script :package="'automake'" :type="'prepare'"></package-script>
<package-script :package="'automake'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'automake'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'automake'" :type="'test'"></package-script>

?> Известно, что тесты `t/subobj.sh`, `t/deprecated-acinit.sh` и `t/init.sh` не проходят в LX4.

## Установка
<package-script :package="'automake'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
