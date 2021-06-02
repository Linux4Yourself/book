
Чтобы выйти из `chroot`, выполните: 

```bash
exit
```

Отключите виртуальные файловые системы:

```bash
umount $LIN/dev{/pts,}
umount $LIN/{sys,proc,run}
```
