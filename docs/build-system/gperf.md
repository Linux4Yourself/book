<pkg :name="'gperf'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'gperf'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'gperf'" :type="'build'"></package-script>

## Тестирование

???+ warning "Предупреждение"

    Тестирование должно производиться в один поток, так как при одновременном тестировании (многопотоковом) появляются всевозможные ошибки. Поэтому и используется ключ `-j1`:

<package-script :package="'gperf'" :type="'test'"></package-script>

## Установка

<package-script :package="'gperf'" :type="'install'"></package-script>


