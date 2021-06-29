<pkg :name="'libtasn1'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'libtasn1'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'libtasn1'" :type="'build'"></package-script>

## Установка

<package-script :package="'libtasn1'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
