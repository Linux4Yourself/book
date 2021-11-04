{{ include('../packages/findutils/README.md') }}

## Настройка

```bash
./configure --prefix=/usr --host=$LIN_TGT   --disable-nls
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
mv -v $LIN/usr/bin/find $LIN/bin
sed -i 's|find:=${BINDIR}|find:=/bin|' $LIN/usr/bin/updatedb
```
