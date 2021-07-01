<pkg :name="'libtasn1'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'libtasn1'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'libtasn1'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'libtasn1'" :type="'test'"></package-script>

## Установка

<package-script :package="'libtasn1'" :type="'install'"></package-script>


## Для multilib

### Очистка

<package-script :package="'libtasn1'" :type="'multi_prepare'"></package-script>

## Настройка

<package-script :package="'libtasn1'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'libtasn1'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'libtasn1'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
