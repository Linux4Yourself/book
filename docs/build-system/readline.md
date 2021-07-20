<pkg :name="'readline'" instsize showsbu2></pkg>

## Подготовка

Переустановка Readline приведет к переименованию старых библиотек в <имя библиотеки>.old. Хотя обычно это не проблема, в некоторых случаях это может вызвать ошибку в ldconfig. Этого можно избежать, выполнив следующие команды:

<package-script :package="'readline'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'readline'" :type="'configure'"></package-script>

### Значения параметров

`--with-curses` - включает использование библиотеки `ncurses`

## Сборка

<package-script :package="'readline'" :type="'build'"></package-script>

## Установка

<package-script :package="'readline'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'readline'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'readline'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'readline'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'readline'" :type="'multi_install'"></package-script>

## Установленные файлы

Библиотеки: `libhistory.so` и `libreadline.so`

<script>
	new Vue({ el: '#main' })
</script>
