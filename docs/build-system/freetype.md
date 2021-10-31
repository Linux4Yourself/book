<pkg :name="'freetype'" instsize showsbu2></pkg>

## Настройка

???+ note "Обратите внимание"

	В руководстве extra, данный пакет следует переустановить после установки `harfbuzz` из-за циклической зависимости.

<package-script :package="'freetype'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'freetype'" :type="'build'"></package-script>

## Установка

<package-script :package="'freetype'" :type="'install'"></package-script>

## Для multilib

### Очистка

<package-script :package="'freetype'" :type="'multi_prepare'"></package-script>

### Настройка

<package-script :package="'freetype'" :type="'multi_configure'"></package-script>

### Сборка

<package-script :package="'freetype'" :type="'multi_build'"></package-script>

### Установка

<package-script :package="'freetype'" :type="'multi_install'"></package-script>


