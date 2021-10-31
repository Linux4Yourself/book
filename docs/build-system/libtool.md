<pkg :name="'libtool'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'libtool'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'libtool'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'libtool'" :type="'test'"></package-script>

???+ tip

    Если у вас несколько ядер процессора, то можно значительно (иногда более чем на 60%) сократить время выполнения тестирования. Перед выполнением тестов объявите переменную: `TESTSUITEFLAGS=-j<N>`, где `<N>` - число ядер ЦП.

???+ warning

    Пять тестов могут дать сбой, однако все тесты проходят после установки `automake`.

## Установка

<package-script :package="'libtool'" :type="'install'"></package-script>

Удалите ненужную статическую библиотеку

<package-script :package="'libtool'" :type="'postinstall'"></package-script>

## Для multilib

### Очистка

<package-script :package="'libtool'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'libtool'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'libtool'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'libtool'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
