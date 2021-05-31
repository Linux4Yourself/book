<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('meson');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>


?> Хотя данный пакет предлагается использовать при установке SystemD, однако он может понадобиться при установке многих других пакетов, за пределами создания базовой системы. Вернитесь к этой инструкции по мере необходимости.

## Подготовка

Убедитесь, что директория для библиотек по умолчанию корректна:

```bash
sed -i "s/return 'lib64'/return 'lib'/g" mesonbuild/mesonlib/universal.py
```

## Сборка

```bash
python3 setup.py build
```

## Установка

```bash
python3 setup.py install --root=dest
cp -rv dest/* /
install -vDm644 data/shell-completions/bash/meson /usr/share/bash-completion/completions/meson
install -vDm644 data/shell-completions/zsh/_meson /usr/share/zsh/site-functions/_meson
```

### Объяснение параметров

`--root=dest` - по умолчанию, все файлы устанавливаются в Python Eggs. При указании параметра `--root=dest`, установка файлов будет выполнена в соответствующий каталог `dest` с сохранением иерархии файловой системы. Затем, выполняется копирование из неё в целевую.


## Установленные файлы

Программы: ``meson``
