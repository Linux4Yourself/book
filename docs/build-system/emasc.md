<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('emacs');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Настройка

```bash
./configure --prefix=/usr --localstatedir=/var
```

## Сборка

```bash
make
```

## Установка

```bash
make install

chown -v -R root:root /usr/share/emacs/27.1 &&
rm -vf /usr/lib/systemd/user/emacs.service
```

!> Emacs устанавливает файлы иконок в `/usr/share/icons/hicolor`. После того, как вы скомпилируете Xorg/Wayland и GTK+ 2.24.33 или 3.24.25, вы можете улучшить производительность и использование памяти, обновив файл `/usr/share/icons/hicolor/index.theme`.  Выполните:

```bash
gtk-update-icon-cache -qtf /usr/share/icons/hicolor
```

## Установленные файлы
* **Установленные программы:** `ctags`, `ebrowse`, `emasc` (символическая ссылка на `emacs-27.1`), `emacs-27.1`, `emacsclient`, `etags` и `grep-changelog`
* **Установленные библиотеки:** нет
* **Установленные директории:** `/usr/libexec/emacs`, `/usr/share/emacs` и `/var/games/emacs`
