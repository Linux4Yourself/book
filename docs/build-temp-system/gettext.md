{{ include('../packages/gettext/README.md') }}


## Настройка

```bash
./configure --disable-static
```

### Значения параметров

`--disable-static` - так как это временный инструмент, то не требуется наличие общих библиотек, поэтому и нет необходимости их создавать.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=/usr install
```
