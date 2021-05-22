<package-info :package="package" showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('kbd');
				this.getBzipPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getBzipPatch: function() {
					getPackage('kbd-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч для исправления работы клавиш backspace и delete:

<pre class="pre">
patch -Np1 -i ../{{patch.fileName}}
</pre>

Удалите не нужную программу `resizecons` требующею svgalib:

```bash
sed -i '/RESIZECONS_PROGS=/s/yes/no/' configure
sed -i 's/resizecons.8 //' docs/man/man8/Makefile.in
```

## Настройка

```bash
./configure --prefix=/usr --disable-vlock
```

### Значения параметров configure

`--disable-vlock` - Данная библиотека требует Linux-PAM.

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
