<pkg :name="'kmod'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'kmod'" :type="'configure'"></package-script>
### Значения параметров
``--with-xz, --with-zlib, --with-zstd``

Параметры позволяют `Kmod` обрабатывать сжатые модули ядра соответствующим алгоритмом сжатия.

## Сборка
<package-script :package="'kmod'" :type="'build'"></package-script>

## Тестирование

Пакет не имеет тестов которые можно запустить непосредственно сейчас. Необходимо дополнительно установить `git`, при этом, некоторые тесты также не будут выполнены вне репозитория.

## Установка
<package-script :package="'kmod'" :type="'install'"></package-script>

Необходимо создать символические ссылки (симлинки) для совместимости с `Module-Init-Tools` (Предыдущая реализация программы обработки модулей ядра):

<package-script :package="'kmod'" :type="'postinstall'"></package-script>

## Для multilib

### Очистка

Очистите предыдущую сборку, но сохраните страницы руководства, так как они не могут быть воссозданы, поскольку пакет `xsltproc` не установлен:

<pkg :name="'kmod'" instsize showsbu2></pkg>

### Подготовка
<package-script :package="'kmod'" :type="'multi_configure'"></package-script>

### Сборка 
<package-script :package="'kmod'" :type="'multi_build'"></package-script>

### Установка
<package-script :package="'kmod'" :type="'multi_install'"></package-script>

<script>
	new Vue({ el: '#main' })
</script> 
