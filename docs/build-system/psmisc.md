<pkg :name="'psmisc'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'psmisc'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'psmisc'" :type="'build'"></package-script>

## Установка

<package-script :package="'psmisc'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
