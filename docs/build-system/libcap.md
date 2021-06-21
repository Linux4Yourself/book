<pkg :name="'libcap'" instsize showsbu2></pkg>

## Подготовка

Отключите установку статических библиотек:
<package-script :package="'libcap'" :type="'prepare'"></package-script>

## Сборка
<package-script :package="'libcap'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'libcap'" :type="'test'"></package-script>

## Установка

<package-script :package="'libcap'" :type="'install'"></package-script>

Установите корректные права для библиотек:

<package-script :package="'libcap'" :type="'postinstall'"></package-script>
 
## Для multilib

### Очистка

<package-script :package="'libcap'" :type="'multi_prepare'"></package-script>

### Сборка 
<package-script :package="'libcap'" :type="'multi_build'"></package-script>
### Установка
<package-script :package="'libcap'" :type="'multi_install'"></package-script>

## Установленные файлы

Программы:  capsh, getcap, getpcaps и setcap

Библиотеки:  libcap.so и libpsx.so

<script>
	new Vue({ el: '#main' })
</script> 
