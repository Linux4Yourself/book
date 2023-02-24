{{ include('../packages/findutils/README.md') }}

## Настройка

```bash
./configure --prefix=/usr                   \
            --localstatedir=/var/lib/locate \
            --host=$LIN_TGT                 \
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

## При раздельной структуре каталогов

Переместите исполняемый файл в нужную директорию:

```bash
mv -v $LIN/usr/bin/find $LIN/bin
sed -i 's|find:=${BINDIR}|find:=/bin|' $LIN/usr/bin/updatedb
```
