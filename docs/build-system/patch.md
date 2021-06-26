<pkg :name="'patch'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'patch'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'patch'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'patch'" :type="'test'"></package-script>

## Установка

<package-script :package="'patch'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
