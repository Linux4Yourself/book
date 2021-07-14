<pkg :name="'p11-kit'" instsize showsbu2></pkg>

## Подготовка

Подготовьте специфичный для дистрибутива скрипт:

<package-script :package="'p11-kit'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'p11-kit'" :type="'configure'"></package-script>

### Объяснение параметров configure

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

<script>
	new Vue({ el: '#main' })
</script>
