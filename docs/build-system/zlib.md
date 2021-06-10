<pkg :name="'zlib-ng'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'zlib-ng'" :type="'configure'"></package-script>

### Значения параметров

`--zlib-compat` - Включает полную совместимость с API `zlib`.

`--native` - Использовать все доступные для вашего процессора оптимизации.

## Сборка

<package-script :package="'zlib-ng'" :type="'build'"></package-script>
## Тестирование

<package-script :package="'zlib-ng'" :type="'test'"></package-script>

## Установка

<package-script :package="'zlib-ng'" :type="'install'"></package-script>

Удалите ненужную статическую библиотеку:
 
<package-script :package="'zlib-ng'" :type="'postinstall'"></package-script>
 
## Для multilib

### Очистка

<package-script :package="'zlib-ng'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'zlib-ng'" :type="'multi_configure'"></package-script>

### Сборка 

<package-script :package="'zlib-ng'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'zlib-ng'" :type="'multi_install'"></package-script>

Удалите ненужную статическую библиотеку:

<package-script :package="'zlib-ng'" :type="'multi_postinstall'"></package-script>

## Установленные файлы

Библиотеки:`libz.so`

### Краткое описание

`libz.so` - Содержит функции сжатия, используемые многими программами

<script>
	new Vue({ el: '#main' })
</script> 
