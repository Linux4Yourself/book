{{ include('../packages/libstdc/README.md') }}


## Настройка

???+ warning "Предупреждение"
	 **Данный пакет входит в архив с исходным кодом пакета GCC**

Создайте отдельную директорию для сборки:

```bash
mkdir -v build
cd       build
```

Запустите скрипт `configure`

```bash
../libstdc++-v3/configure           \
    --host=$LIN_TGT                 \
    --build=$(../config.guess)      \
    --prefix=/usr                   \
    --disable-multilib              \
    --disable-nls                   \
    --disable-libstdcxx-pch         \
    --with-gxx-include-dir=/tools/$LIN_TGT/include/c++/12.1.0
```

### Значения параметров

` --host=$LIN_TGT` `--build=$(../config.guess)` - необходимо для кросс-компиляции

`--disable-multilib` - 32-битная версия libstdc не нужна на данном этапе

`--disable-libstdcxx-pch` - отключает установку предварительно скомпилированных заголовков, ненужных на данном этапе

`--with-gxx-include-dir=/tools/$LIN_TGT/include/c++/12.1.0` - путь поиска заголовков C++. `libstdc++` является стандартной библиотекой C++, указанная опцией директория должна соответствовать местоположению, в котором компилятор C++ будет искать стандартные включаемые файлы.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
