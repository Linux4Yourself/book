{{ include('../packages/diffutils/README.md') }}

## Настройка

Запустите скрипт `configure`:

```bash
./configure --prefix=/usr --host=$LIN_TGT
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
