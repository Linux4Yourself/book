{{ include('../packages/libffi/README.md') }}

## Настройка

???+ warning "Предупреждение"

    Libffi как и GMP оптимизируется под определённый процессор. Если планируется переносить систему на компьютер с другим ЦП, экспортируйте `CFLAGS` и `CXXFLAGS`, чтобы указать универсальную сборку для вашей архитектуры.

<package-script :package="'libffi'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'libffi'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'libffi'" :type="'test'"></package-script>

## Установка

<package-script :package="'libffi'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'libffi'" :type="'multi_prepare'"></package-script>

### Подготовка

<package-script :package="'libffi'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'libffi'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'libffi'" :type="'multi_install'"></package-script>

## Установленные файлы

Библиотеки: libffi.so


