{{ include('../packages/binutils/README.md') }}

## Подготовка

Исправьте ошибку связанную с поставкой устаревшей версии `libtool` вместе с `Binutils`:

```bash
sed '6009s/$add_dir//' -i ltmain.sh
```

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
make DESTDIR=$LIN install
```
