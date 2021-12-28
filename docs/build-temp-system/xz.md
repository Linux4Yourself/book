{{ include('../packages/xz/README.md') }}

## Настройка

```bash
./configure --prefix=/usr --host=$LIN_TGT     \
            --build=$(build-aux/config.guess) \
            --disable-static                  \
            --disable-nls                     \
            --disable-doc
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

Переместите часть файлов в нужные директории:

```bash
mv -v $LIN/usr/bin/{lzma,unlzma,lzcat,xz,unxz,xzcat}  $LIN/bin
mv -v $LIN/usr/lib/liblzma.so.*                       $LIN/lib
ln -svf ../../lib/$(readlink $LIN/usr/lib/liblzma.so) $LIN/usr/lib/liblzma.so
```
