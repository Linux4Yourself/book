<package-info :package="package" showsbu></package-info>

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
			}
		}
  })
</script>

## Настройка

!> **Пакет binutils должен быть установлен раньше GCC и libc**.

В документации пакета {{package.name}} рекомендуется использовать отдельную директорию для сборки:

```bash
mkdir build
cd build
```

?> 1 SBU равен времени сборки данного пакета.

Запустим скрипт `configure`:

```bash
../configure  --prefix=$LIN/tools       \
             --with-sysroot=$LIN        \
             --target=$LIN_TGT          \
             --disable-nls              \
             --disable-werror
```

### Для multilib

Добавьте параметр`--enable-multilib`

### Значения параметров

`--with-sysroot=$LIN` `--target=$LIN_TGT` - необходимо для кросс-компиляции.

`--disable-nls` - Для кросс-компилятора не требуется локализация.

`--disable-werror` - Отключает остановку сборки при предупреждениях.

## Сборка

```bash
make
```

## Установка

```bash
make install -j1
```

`-j1` предотвращает возможную ошибку установки.

Дополнительную информацию о компиляции пакетов смотрите [здесь](../additional/src-compiling.md).
