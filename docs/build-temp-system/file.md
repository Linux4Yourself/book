{{ include('../packages/file/README.md') }}

## Подготовка

На хост-системе должна присутствовать утилита File. Вы можете также собрать её следующим образом:

```bash
mkdir build
pushd build
  ../configure --disable-bzlib      \
               --disable-libseccomp \
               --disable-xzlib      \
               --disable-zlib
  make
popd
```

## Настройка

```bash
./configure --prefix=/usr --host=$LIN_TGT --build=$(./config.guess)
```

## Сборка

```bash
make FILE_COMPILE=$(pwd)/build/src/file
```

## Установка

```bash
make DESTDIR=$LIN install
```
