{{ include('../packages/gzip/README.md') }}

## Настройка

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

## При раздельной структуре каталогов

Переместите исполняемый файл в нужную директорию:

```bash
mv -v $LIN/usr/bin/gzip $LIN/bin
```
