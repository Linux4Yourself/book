{{ include('../packages/grep/README.md') }}

## Настройка

```bash
./configure --prefix=/usr   \
            --host=$LIN_TGT \
            --bindir=/bin   \
            --disable-nls
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
