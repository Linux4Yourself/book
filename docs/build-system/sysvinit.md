<package-info :package="package" showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('sysvinit');
				this.getBzipPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getBzipPatch: function() {
					getPackage('sysvinit-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените необходимый патч:

<pre class="pre">
patch -Np1 -i ../{{patch.fileName}}
</pre>


## Сборка

```bash
make
```

## Установка

```bash
make install
```

