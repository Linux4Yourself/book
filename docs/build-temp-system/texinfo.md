{{ include('../packages/texinfo/README.md') }}

## Подготовка

Исправьте ошибку, связанную с `glibc-2.34`:

```bash
sed -e 's/__attribute_nonnull__/__nonnull/' \
    -i gnulib/lib/malloc/dynarray-skeleton.c
```

## Настройка

```bash
./configure --prefix=/usr
```

???+ note "Обратите внимание"
	  Во время процесса настройки выполняется тест, который указывает на ошибку TestXS_la-TestXS.lo. Её можно игнорировать.

## Сборка

```bash
make
```

## Установка

```bash
make install
```
