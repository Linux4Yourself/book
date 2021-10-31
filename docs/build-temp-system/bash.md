{{ include('../packages/bash/README.md') }}

### Настройка

Запустите скрипт `configure`:

```bash
./configure --prefix=/usr                   \
            --build=$(support/config.guess) \
            --host=$LIN_TGT                 \
            --without-bash-malloc
```

#### Значения параметров

`--without-bash-malloc` - этот параметр отключает использование функции выделения памяти (malloc) Bash, которая вызывает ошибки сегментации. Отключив эту опцию, Bash будет использовать функции malloc из libc, которые более стабильны.

### Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

Сделайте символическую ссылку для программ, которые используют `sh` в качестве интерпретатора:

```bash
ln -sv bash $LIN/bin/sh
```

## При раздельной структуре каталогов

Переместите `bash` в нужную директорию:

```bash
mv $LIN/usr/bin/bash $LIN/bin/bash
```
