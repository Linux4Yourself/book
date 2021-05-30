# Очистка системы

Во время тестов может создаваться большое количество временных файлов. Удалите их:

```bash
rm -rf /tmp/*
```

Перезайдите в среду `chroot`:

```bash
logout
```

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/chroot.sh ':include')

Файлы `.la` потеряли свою актуальность и могут вызвать проблемы при обновлении. Удалите их:

```bash
find /usr/lib /usr/libexec /usr/lib32 -name \*.la -delete
```

Удалите временный компилятор:

```bash
find /usr -depth -name $(uname -m)-lin-linux-gnu\* | xargs rm -rf
```

Также удалите кросс-компилятор:

```bash
rm -rf /tools
```

Удалите созданного для тестов пользователя:

```bash
userdel -r tester
```

Также, вы можете удалить не нужные символы из исполняемых файлов:

```bash
find /usr/lib -type f -name \*.a \
   -exec strip --strip-debug {} ';'

find /usr/lib -type f -name \*.so* ! -name \*dbg \
   -exec strip --strip-unneeded {} ';'

find /usr/{bin,sbin,libexec} -type f \
    -exec strip --strip-all {} ';'
```
