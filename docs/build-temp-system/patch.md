{{ include('../packages/patch/README.md') }}

## Настройка

```bash
./configure --prefix=/usr   \
            --host=$LIN_TGT \
            --build=$(build-aux/config.guess)
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
