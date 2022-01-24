{{ include('../packages/grep/README.md') }}

## Настройка

```bash
./configure --prefix=/usr   \
            --host=$LIN_TGT \
            --bindir=/bin   \
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
