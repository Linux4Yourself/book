<pkg :name="'grub'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

https://unifoundry.com/pub/unifont/unifont-13.0.06/font-builds/unifont-13.0.06.pcf.gz

## Подготовка

Установите шрифт, используемый grub:

<package-script :package="'grub'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'grub'" :type="'configure'"></package-script>

## Значения параметров

`--disable-efiemu` - Отключает установку большого и ненужного компонента

`--with-platform=efi` - Использовать EFI

`--enable-grub-mkfont` - Включает установку шрифтов

## Сборка

<package-script :package="'grub'" :type="'build'"></package-script>

## Установка

<package-script :package="'grub'" :type="'install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script>
