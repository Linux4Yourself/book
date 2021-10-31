{{ include('../packages/p11-kit/README.md') }}

## Подготовка

Подготовьте специфичный для дистрибутива скрипт:

<package-script :package="'p11-kit'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'p11-kit'" :type="'configure'"></package-script>

### Значение параметров configure

`--with-trust-paths=/etc/pki/anchors` - задает путь для доверенных сертификатов

## Сборка

<package-script :package="'p11-kit'" :type="'build'"></package-script>

## Установка

<package-script :package="'p11-kit'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'p11-kit'" :type="'multi_prepare'"></package-script>

## Настройка

<package-script :package="'p11-kit'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'p11-kit'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'p11-kit'" :type="'multi_install'"></package-script>


