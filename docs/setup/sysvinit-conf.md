# Настройка System V init

При загрузке `init` читает файл `/etc/inittab`. Создайте его

```bash
cat > /etc/inittab << "EOF"
# Begin /etc/inittab

id:3:initdefault:

si::sysinit:/etc/rc.d/init.d/rc S

l0:0:wait:/etc/rc.d/init.d/rc 0
l1:S1:wait:/etc/rc.d/init.d/rc 1
l2:2:wait:/etc/rc.d/init.d/rc 2
l3:3:wait:/etc/rc.d/init.d/rc 3
l4:4:wait:/etc/rc.d/init.d/rc 4
l5:5:wait:/etc/rc.d/init.d/rc 5
l6:6:wait:/etc/rc.d/init.d/rc 6

ca:12345:ctrlaltdel:/sbin/shutdown -t1 -a -r now

su:S016:once:/sbin/sulogin

1:2345:respawn:/sbin/agetty --noclear tty1 9600
2:2345:respawn:/sbin/agetty tty2 9600
3:2345:respawn:/sbin/agetty tty3 9600
4:2345:respawn:/sbin/agetty tty4 9600
5:2345:respawn:/sbin/agetty tty5 9600
6:2345:respawn:/sbin/agetty tty6 9600

# End /etc/inittab
EOF
```

## Настройка системного времени

При загрузке считывается информация из аппаратных часов - CMOS. В них может стоять как местное время, так и универсальное (UTC). 
Программно нельзя определить, какой часовой пояс используют часы CMOS, однако вы можете выполнить команду `hwclock --localtime --show` и сравнить результат с местным временем. Если он не совпадает - ваши часы скорее всего используют UTC.

Создайте файл, определяющий использует ли CMOS UTC (Если нет - замените UTC=1 на UTC=0)

```bash
cat > /etc/sysconfig/clock << "EOF"
# Begin /etc/sysconfig/clock

UTC=1

# Set this to any options you might need to give to hwclock,
# such as machine hardware clock type for Alphas.
CLOCKPARAMS=

# End /etc/sysconfig/clock
EOF
```

<!-- TODO Дополнить -->
