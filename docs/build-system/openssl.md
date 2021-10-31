{{ include('../packages/openssl/README.md') }}

## Настройка

<package-script :package="'openssl'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'openssl'" :type="'build'"></package-script>

## Тестирование

<package-script :package="'openssl'" :type="'test'"></package-script>

???+ warning "Предупреждение"

    Известно, что один тест `30-test_afalg.t` даст сбой в некоторых конфигурациях ядра (по-видимому, предполагает, что некоторые неопределенные параметры `Crypto` были выбраны).

## Установка

<package-script :package="'openssl'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'openssl'" :type="'multi_prepare'"></package-script>

### Подготовка

<package-script :package="'openssl'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'openssl'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'openssl'" :type="'multi_install'"></package-script>

## Установленные файлы

Программы: c_rehash и openssl

Библиотеки: libcrypto.so и libssl.so

Директории: /etc/ssl, /usr/include/openssl и /usr/lib/engines


