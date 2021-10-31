<pkg :name="'gdbm'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'gdbm'" :type="'configure'"></package-script>

### Значения параметров

`--enable-libgdbm-compat` - позволяет использовать библиотеку для совместимости c `libgdbm`. Некоторые пакеты могут использовать старые процедуры DBM, которые и предоставляет эта библиотека.

## Сборка

<package-script :package="'gdbm'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'gdbm'" :type="'test'"></package-script>

???+ warning "Предупреждение"

    Известно, что один тест (`version`) может дать сбой.

## Установка

<package-script :package="'gdbm'" :type="'install'"></package-script>


