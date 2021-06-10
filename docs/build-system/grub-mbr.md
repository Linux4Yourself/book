<pkg :name="'grub'" instsize showsbu2></pkg>


## Настройка
<package-script :package="'grub'" :type="'configure-mbr'"></package-script>

## Значения параметров

`--disable-efiemu` - Отключает установку большого и не нужного компонента

## Сборка
<package-script :package="'grub'" :type="'build'"></package-script>

## Установка
<package-script :package="'grub'" :type="'install-mbr'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
