{{ include('../packages/gawk/README.md') }}

## Настройка

Убедитесь, что лишние файлы не будут установлены:

```bash
sed -i 's/extras//' Makefile.in
```

Выполните скрипт `configure`:

```bash
./configure --prefix=/usr   \
            --host=$LIN_TGT \
            --build=$(./config.guess)  --disable-nls
```

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
