{{ include('../packages/texinfo/README.md') }}

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
