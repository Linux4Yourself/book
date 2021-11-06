# Настройка SysVinit

При загрузке `init` читает файл `/etc/inittab`. Создайте его:

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

Создайте файл, определяющий использует ли CMOS UTC (если нет - замените UTC=1 на UTC=0):

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

## Настройка клавиатуры в TTY

Настройка клавиатуры и шрифта консоли производится в файле `/etc/sysconfig/console`. Параметры в этом файле:

* `UNICODE`: при значении 1, yes или true переводит консоль в режим UTF-8, что важно для русского языка.
* `KEYMAP`: аргументы для программы `loadkeys`, которая загружает раскладки клавиатуры. Соответственно, значение этого параметра равно имени загружаемой раскладки.
* `FONT`: аргументы для программы `setfont`, которая устанавливает шрифт терминала. Соответственно, значение этого параметра есть имя шрифта.

Раскладки клавиатуры содержатся в каталоге `/usr/share/keymaps/`, а шрифт - в `/usr/share/consolefonts`. Оттуда берутся нужные файлы и указываются в файле `/etc/sysconfig/console`.

### Установка раскладки клавиатуры
Для поиска нужной раскладки выполните:

```bash
find /usr/share/keymaps -type f
```

Для русской (на примере qwerty) это может быть:

* `ru` - переключение раскладки не установлено (либо же вовсе отсутствует)
* `ruwin_alt_sh-UTF-8` - переключение раскладки по Alt+Shift.
* `ruwin_cplk-UTF-8` - переключение раскладки по Caps Lock.
* `ruwin-ct_sh-UTF-8` - переключение раскладки по Ctrl+Shift.

Выберите из списка нужную и запишите в файл `/etc/sysconfig/console` как значение переменной `KEYMAP`. Значение не должно включать в себя путь до раскладки и её расширение.

Пример:

```bash
KEYMAP="ruwin_alt_sh-UTF-8"
```

### Установка шрифта консоли

Следующим шагом будет установка шрифта. Он должен поддерживать кириллицу. Все шрифты находятся в `/usr/share/consolefonts`. Выполните:

```bash
ls /usr/share/consolefonts
```

Из списка выберите нужный шрифт. Мы вам советуем `cyr-sun16`. Теперь запишите имя нужного шрифта в конфигурационный файл как значение переменной `FONT`. Оно не должно включать в себя путь до раскладки и её расширение.

Пример:

```bash
FONT="cyr-sun16"
```

Итоговый конфиг теперь выглядит так:

```bash
# Begin /etc/sysconfig/console

UNICODE="1"
KEYMAP="ruwin_alt_sh-UTF-8"
FONT="cyr-sun16"

# End /etc/sysconfig/console
```

<!-- TODO Дополнить -->
