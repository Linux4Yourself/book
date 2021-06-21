<pkg :name="'texinfo'" instsize showsbu2></pkg>

## Настройка
<package-script :package="'texinfo'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'texinfo'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'texinfo'" :type="'test'"></package-script>

## Установка

При желании установите компоненты TeX.
<package-script :package="'texinfo'" :type="'install'"></package-script>

``TEXMF=/usr/share/texmf`` - Переменная TEXMF содержит местоположение корня дерева TeX, если пакет TeX будет установлен позже.

Система документации Info использует простой текстовый файл для хранения списка пунктов меню. Файл находится в каталоге ``/usr/share/info/dir``. К сожалению, из-за случайных проблем в Make-файлах различных пакетов, он иногда может выйти из синхронизации с информационными страницами, установленными в системе. Если каталог ``/usr/share/info/dir`` когда-либо потребуется создать заново, следующие команды выполнят эту задачу:
<package-script :package="'texinfo'" :type="'postinstall'"></package-script>


<script>
	new Vue({ el: '#main' })
</script> 
