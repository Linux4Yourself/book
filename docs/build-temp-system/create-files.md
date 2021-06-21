# Создание основных файлов и символических ссылок

Исторически, в файле ``/etc/mtab`` записывалась информация о смонтированных разделах. Создайте символическую ссылку для совместимости:

```bash
ln -sv /proc/self/mounts /etc/mtab
```

Некоторым пакетам может понадобиться файл ``/etc/hosts``:

```bash
cat > /etc/hosts << EOF
"127.0.0.1 localhost $(hostname)" 
::1        localhost
EOF
```

Создайте файл списка пользовательских учётных записей /etc/passwd:

```bash
cat > /etc/passwd << "EOF"
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/dev/null:/bin/false
daemon:x:6:6:Daemon User:/dev/null:/bin/false
messagebus:x:18:18:D-Bus Message Daemon User:/run/dbus:/bin/false
uuidd:x:80:80:UUID Generation Daemon User:/dev/null:/bin/false
nobody:x:99:99:Unprivileged User:/dev/null:/bin/false
EOF
```

Создайте файл имён групп и членов каждой группы: 

```bash
cat > /etc/group << "EOF"
root:x:0:
bin:x:1:daemon
sys:x:2:
kmem:x:3:
tape:x:4:
tty:x:5:
daemon:x:6:
floppy:x:7:
disk:x:8:
lp:x:9:
dialout:x:10:
audio:x:11:
video:x:12:
utmp:x:13:
usb:x:14:
cdrom:x:15:
adm:x:16:
messagebus:x:18:
input:x:24:
mail:x:34:
kvm:x:61:
uuidd:x:80:
wheel:x:97:
nogroup:x:99:
users:x:999:
EOF
```

Для проведения тестов некоторых пакетов вы можете добавить пользователя ``tester``:

```bash
echo "tester:x:101:101::/home/tester:/bin/bash" >> /etc/passwd
echo "tester:x:101:" >> /etc/group
install -o tester -d /home/tester
```

Чтобы убрать надпись `I have no name!` в приглашении ``bash`` выполните:

```bash
bash --login +h
```

Некоторые программы могут записывать информацию о входах в систему в журнал, но для этого требуется создать специальные файлы:

```bash
touch /var/log/{btmp,lastlog,faillog,wtmp}
chgrp -v utmp /var/log/lastlog
chmod -v 664  /var/log/lastlog
chmod -v 600  /var/log/btmp
```


