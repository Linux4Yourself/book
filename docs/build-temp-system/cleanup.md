# Очистка и сохранение временной системы

Файлы ``libtool`` с расширением `.la` могут мешать линковке с динамическими библиотеками. Удалите их:

```bash
find /usr/{lib{,32},libexec} -name \*.la -delete
```

Удалите документацию временных инструментов:

```bash
rm -rf /usr/share/{info,man,doc}/*
```

## Сохранение

При желании вы можете сохранить временную систему.
Сначала выйдите из `chroot` и отключите виртуальные файловые системы: 

```bash
exit
umount $LIN/dev{/pts,}
umount $LIN/{sys,proc,run}
```

Далее сохраните временную систему в архив:

```bash
cd $LIN &&
tar -cJpf $HOME/lin-temp-tools.tar.xz .
```

### Восстановление

Выполняется из под хост-системы:

```bash
cd $LIN &&
rm -rf ./* &&
tar -xpf $HOME/lin-temp-tools.tar.xz
```
