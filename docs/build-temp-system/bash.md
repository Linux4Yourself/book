<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('bash');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

### Настройка

Запустите скрипт `configure`:

```bash
./configure --prefix=/usr                   \
            --build=$(support/config.guess) \
            --host=$LIN_TGT                 \
            --without-bash-malloc
```

#### Объяснение опций configure

`--without-bash-malloc` - Этот параметр отключает использование функции выделения памяти (malloc) Bash, которая вызывает ошибки сегментации. Отключив эту опцию, Bash будет использовать функции malloc из libc, которые более стабильны.

### Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

Сделайте символическую ссылку для программ, которые используют ``sh`` для оболочки:

```bash
ln -sv bash $LIN/bin/sh
```
