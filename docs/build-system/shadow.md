<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('shadow');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Подготовка

Отключите установку программы `groups`, так как `coreutils` предоставляет лучшую версию и содержащихся в пакете `man-pages` man-страниц

```bash
sed -i 's/groups$(EXEEXT) //' src/Makefile.in
find man -name Makefile.in -exec sed -i 's/groups\.1 / /'   {} \;
find man -name Makefile.in -exec sed -i 's/getspnam\.3 / /' {} \;
find man -name Makefile.in -exec sed -i 's/passwd\.5 / /'   {} \;
```

Для использования более безопасного метода шифрования SHA-512 вместо стандартного `crypt` метода выполните, а также использования `/var/mail` вместо устаревшего `/var/spool/mail` и устранения дублирования путей в переменной `PATH` по умолчанию выполните:

```bash
sed -e 's:#ENCRYPT_METHOD DES:ENCRYPT_METHOD SHA512:' \
    -e 's:/var/spool/mail:/var/mail:'                 \
    -e '/PATH=/{s@/sbin:@@;s@/bin:@@}'                \
    -i etc/login.defs
```

Сделайте незначительное изменение для того чтобы номера групп начинались с 1000

```
sed -i 's/1000/999/' etc/useradd
```

## Настройка


```bash
touch /usr/bin/passwd
./configure --sysconfdir=/etc \
            --with-group-name-max-length=32
```

## Сборка


```bash
make
```

## Установка

```bash
make install
```
 
## Настройка

Для включения теневых паролей и групп выполните:

```bash
pwconv
grpconv
```

В файле `/etc/default/useradd` можно настроить параметры утилиты `useradd`.

Задайте пароль на пользователя `root`:

```bash
passwd root
```

## Установленные файлы

Программы:  chage, chfn, chgpasswd, chpasswd, chsh, expiry, faillog, gpasswd, groupadd, groupdel, groupmems, groupmod, grpck, grpconv, grpunconv, lastlog, login, logoutd, newgidmap, newgrp, newuidmap, newusers, nologin, passwd, pwck, pwconv, pwunconv, sg (ссылка на newgrp), su, useradd, userdel, usermod, vigr (ссылка на vipw) и vipw

Директории: /etc/default

