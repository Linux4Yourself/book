{{ include('../packages/binutils/README.md') }}


## Настройка

???+ note "Обратите внимание"

	**Пакет binutils должен быть установлен раньше GCC и libc**.

Пакет Binutils требует использовать отдельную директорию для сборки. Создайте её:

```bash
mkdir -v build
cd       build
```

???+ note "Обратите внимание"

	1 SBU равен времени сборки данного пакета.

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

`--with-sysroot=$LIN`, `--target=$LIN_TGT` - необходимо для кросс-компиляции.

`--disable-nls` - для кросс-компилятора не требуется локализация.

`--disable-werror` - отключает остановку сборки при предупреждениях.

## Сборка

```bash
make
```

## Установка

```bash
make install -j1
```

`-j1` предотвращает возможную ошибку установки.

Дополнительную информацию о компиляции пакетов смотрите [здесь](../../additional/src-compiling).
