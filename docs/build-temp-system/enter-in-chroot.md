# Вход в оркружение chroot

Для того чтобы изолироваться от хост-системы необходимо войти в среду ``chroot``

Создайте два файла в директории ``/dev``:

```bash
mknod -m 600 $LIN/dev/console c 5 1
mknod -m 666 $LIN/dev/null c 1 3
```

!>  **После перезагрузки следует выполнить заново действия, идущие далее**

 Смонтируйте виртуальные файловые системы ядра:
 
```bash
mount -v --bind /dev $LIN/dev
mount -v --bind /dev/pts $LIN/dev/pts
mount -vt proc proc $LIN/proc
mount -vt sysfs sysfs $LIN/sys
mount -vt tmpfs tmpfs $LIN/run
```

В некоторых хост-системах ``/dev/shm`` ссылка на ``/run/shm``. Если это так в вашей системе выполните:

```bash
if [ -h $LIN/dev/shm ]; then
  mkdir -pv $LIN/$(readlink $LIN/dev/shm)
fi
```

Войдите в ``chroot``:

<common-script :name="'chroot'"></common-script>

[filename](../shared/chroot.md ':include')


<script>
	new Vue({ el: '#main' })
</script> 
