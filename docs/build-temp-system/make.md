{{ include('../packages/make/README.md') }}

## Настройка

```bash
./configure --prefix=/usr   \
            --without-guile \
            --host=$LIN_TGT \
            --build=$(build-aux/config.guess)
```

### Значения параметров

`--without-guile` - если не указать этот параметр в процессе настройки, `guile` будет задействован с хост-системы. Так как мы выполняем кросс-компиляцию, следует выставить этот параметр.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
