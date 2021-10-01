<package-info :package="package" ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('binutils');
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

Пакет Binutils требует использовать отдельную директорию для сборки. Создайте её:

```bash
mkdir -v build
cd       build
```

## Настройка

```bash
../configure                   \
    --prefix=/usr              \
    --build=$(../config.guess) \
    --host=$LIN_TGT            \
    --disable-nls              \
    --enable-shared            \
    --disable-werror           \
    --enable-64-bit-bfd
```

### Для multilib

Добавьте параметр `--enable-multilib`

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install -j1
install -vm755 libctf/.libs/libctf.so.0.0.0 $LIN/usr/lib
```
