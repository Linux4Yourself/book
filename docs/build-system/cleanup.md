# Очистка системы

Во время тестов может создаваться большое количество временных файлов. Удалите их:

```bash
rm -rf /tmp/*
```

Перезайдите в среду `chroot`:

```bash
logout
chroot "$LFS" /usr/bin/env -i          \
    HOME=/root TERM="$TERM"            \
    PS1='(chroot) \u:\w\$ '        \
    PATH=/usr/bin            \
    /bin/bash --login
```

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
