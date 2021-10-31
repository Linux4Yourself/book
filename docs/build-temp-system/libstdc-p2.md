# LibstdC++ проход 2

Пакет содержит библиотеку времени исполнения, необходимую программам, написанным на языке C++ и собранным при помощи компилятора GNU.

{{ include('../packages/gcc/README.md') }}


## Настройка

???+ warning "Предупреждение"
	 **Данный пакет входит в архив с исходниками GCC**.

Создайте необходимую символическую ссылку:

```bash
ln -s gthr-posix.h libgcc/gthr-default.h
```

Создайте отдельную директорию для сборки:

```bash
mkdir -v build
cd       build
```

Запустите скрипт `configure`

```bash
../libstdc++-v3/configure            \
    CXXFLAGS="-O2 -s -D_GNU_SOURCE"  \
    --prefix=/usr                    \
    --disable-nls                    \
    --host=$(uname -m)-lin-linux-gnu \
    --disable-libstdcxx-pch --disable-multilib
```

### Для multilib

Замените `--disable-multilib` на `--enable-multilib`.

### Значения параметров

`--disable-libstdcxx-pch` - отключает установку предварительно скомпилированных заголовков, ненужных на данном этапе

`--host=$(uname -m)-lin-linux-gnu` - Libstdc++ должна быть собрана с такими же параметрами, что и GCC

## Сборка

```bash
make
```

## Установка


```bash
make install
```
