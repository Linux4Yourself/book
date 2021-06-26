<pkg :name="'autoconf'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'autoconf'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'autoconf'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'autoconf'" :type="'test'"></package-script>

?> Если у вас несколько ядер процессора, то можно значительно (иногда более чем на 60%) сократить время выполнения тестирования. Перед выполнением тестов объявите переменную: `TESTSUITEFLAGS=-j<N>`, где `<N>` - число ядер ЦП.

## Установка

<package-script :package="'autoconf'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
