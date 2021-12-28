{{ include('../packages/python/README.md') }}

## Настройка

```bash
./configure --prefix=/usr --enable-shared \
            --without-ensurepip
```

### Значения параметров

`--enable-shared` - включает установку динамических библиотек;

`--without-ensurepip` - менеджер пакетов `pip` не нужен на данном этапе.

## Сборка

```bash
make
```

## Установка

```bash
make install
```
