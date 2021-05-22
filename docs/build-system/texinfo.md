<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('texinfo');
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
./configure --prefix=/usr
```

## Сборка

```bash
make
```
## Тестирование

```bash
make check
```

## Установка

```bash
make install
```

При желании установите компоненты TeX.

```bash
make TEXMF=/usr/share/texmf install-tex
```

``TEXMF=/usr/share/texmf`` - Переменная TEXMF содержит местоположение корня дерева TeX, если пакет TeX будет установлен позже.

Система документации Info использует простой текстовый файл для хранения списка пунктов меню. Файл находится в каталоге ``/usr/share/info/dir``. К сожалению, из-за случайных проблем в Make-файлах различных пакетов, он иногда может выйти из синхронизации с информационными страницами, установленными в системе. Если каталог ``/usr/share/info/dir`` когда-либо потребуется создать заново, следующие команды выполнят эту задачу:

```bash
pushd /usr/share/info
  rm -v dir
  for f in *
    do install-info $f dir 2>/dev/null
  done
popd
```
