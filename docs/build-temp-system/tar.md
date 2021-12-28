{{ include('../packages/tar/README.md') }}
## Настройка

```bash
./configure --prefix=/usr                     \
            --host=$LIN_TGT                   \
            --build=$(build-aux/config.guess) \
            --disable-nls  --disable-acl      \
            --bindir=/bin
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
