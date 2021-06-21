<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('file');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

На хост-системе должна присутствовать утилита {{package.name}}. Вы можете также собрать её следующим образом:

```bash
mkdir build
pushd build
  ../configure --disable-bzlib      \
               --disable-libseccomp \
               --disable-xzlib      \
               --disable-zlib
  make
popd
```

## Настройка


```bash
./configure --prefix=/usr --host=$LIN_TGT --build=$(./config.guess)
```

## Сборка


```bash
make FILE_COMPILE=$(pwd)/build/src/file
```

## Установка

```bash
make DESTDIR=$LIN install
```
