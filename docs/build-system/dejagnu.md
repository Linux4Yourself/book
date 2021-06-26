<pkg :name="'dejagnu'" instsize showsbu2></pkg>

[filename](../shared/test-pkgs.md ":include")

## Настройка

<package-script :package="'dejagnu'" :type="'configure'"></package-script>

## Сборка и установка

<package-script :package="'dejagnu'" :type="'install'"></package-script>

## Тестирование

<package-script :package="'dejagnu'" :type="'test'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
