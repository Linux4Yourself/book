<pkg :name="'shadow'" instsize showsbu2></pkg>

## Подготовка

- Отключите установку программы `groups`, так как `coreutils` предоставляет лучшую версию и содержащихся в пакете `man-pages` man-страниц

- Для использования более безопасного метода шифрования SHA-512 вместо стандартного `crypt` метода, а также использования `/var/mail` вместо устаревшего `/var/spool/mail` и устранения дублирования путей в переменной `PATH` по умолчанию

- Сделайте незначительное изменение, для того чтобы номера групп начинались с 1000

<package-script :package="'shadow'" :type="'prepare'"></package-script>

## Настройка

<package-script :package="'shadow'" :type="'configure'"></package-script>

## Сборка

<package-script :package="'shadow'" :type="'build'"></package-script>

## Установка

<package-script :package="'shadow'" :type="'install'"></package-script>

## Настройка

Для включения теневых паролей и групп выполните:
<package-script :package="'shadow'" :type="'postinstall'"></package-script>

В файле `/etc/default/useradd` можно настроить параметры утилиты `useradd`.

Задайте пароль на пользователя `root`:

```bash
passwd root
```

## Установленные файлы

Программы: chage, chfn, chgpasswd, chpasswd, chsh, expiry, faillog, gpasswd, groupadd, groupdel, groupmems, groupmod, grpck, grpconv, grpunconv, lastlog, login, logoutd, newgidmap, newgrp, newuidmap, newusers, nologin, passwd, pwck, pwconv, pwunconv, sg (ссылка на newgrp), su, useradd, userdel, usermod, vigr (ссылка на vipw) и vipw

Директории: `/etc/default`

<script>
	new Vue({ el: '#main' })
</script>
