<pkg :name="'expect'" instsize showsbu2></pkg>

[filename](../shared/test-pkgs.md ":include")

## Настройка

<package-script :package="'expect'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'expect'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'expect'" :type="'test'"></package-script>

## Установка

<package-script :package="'expect'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
