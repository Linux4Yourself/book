<package-info :package="package" instsize showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('efivar');
				this.getBzipPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getBzipPatch: function() {
					getPackage('efivar-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч, исправляющий ошибку сборки новыми версиями GCC:

<pre class="pre">
patch -Np1 -i ../{{patch.fileName}}
</pre>


## Сборка

```bash
make CFLAGS="-O2 -Wno-stringop-truncation"
```

## Установка

```bash
make install LIBDIR=/usr/lib BINDIR=/usr/bin
```
