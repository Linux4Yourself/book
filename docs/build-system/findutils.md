<pkg :name="'findutils'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'findutils'" :type="'configure'"></package-script>

### Значения параметров

`--localstatedir` - замена расположения базы данных `locate` в `/var/lib/locate` для соответствия FHS.

## Сборка

<package-script :package="'findutils'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'findutils'" :type="'test'"></package-script>

## Установка

<package-script :package="'findutils'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
