{{ include('../packages/emacs/README.md') }}

## Подготовка

Во-первых, устраните ошибку переносимости в glibc 2.34, которая больше не определяет SIGSTKSZ.

```bash
{{ include('../packages/emacs/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/emacs/configure') }}
```

## Сборка

```bash 
{{ include('../packages/emacs/build') }}
```

## Установка

```bash 
{{ include('../packages/emacs/install') }}
```

???+ info

	Emacs устанавливает файлы иконок в `/usr/share/icons/hicolor`. После того, как вы скомпилируете Xorg/Wayland и GTK+ 2.24.33 или 3.24.25, вы можете улучшить производительность и использование памяти, обновив файл `/usr/share/icons/hicolor/index.theme`. Выполните:

    ```bash 
    {{ include('../packages/emacs/postinstall') }}
    ```

## Установленные файлы

**Программы:** `ctags`, `ebrowse`, `emasc` (символическая ссылка на `emacs-27.1`), `emacs-27.1`, `emacsclient`, `etags` и `grep-changelog`

**Директории:** `/usr/libexec/emacs`, `/usr/share/emacs` и `/var/games/emacs`


