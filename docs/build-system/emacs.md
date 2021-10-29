<pkg :name="'emacs'" instsize showsbu2></pkg>

## Настройка

<package-script :package="'emacs'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'emacs'" :type="'build'"></package-script>

## Установка

<package-script :package="'emacs'" :type="'install'"></package-script>

???+ info

	Emacs устанавливает файлы иконок в `/usr/share/icons/hicolor`. После того, как вы скомпилируете Xorg/Wayland и GTK+ 2.24.33 или 3.24.25, вы можете улучшить производительность и использование памяти, обновив файл `/usr/share/icons/hicolor/index.theme`. Выполните:

<package-script :package="'emacs'" :type="'postinstall'"></package-script>

## Установленные файлы

- **Установленные программы:** `ctags`, `ebrowse`, `emasc` (символическая ссылка на `emacs-27.1`), `emacs-27.1`, `emacsclient`, `etags` и `grep-changelog`
- **Установленные библиотеки:** нет
- **Установленные директории:** `/usr/libexec/emacs`, `/usr/share/emacs` и `/var/games/emacs`

<script>
	new Vue({ el: '#main' })
</script>
