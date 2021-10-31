{{ include('../packages/shadow/README.md') }}

## Подготовка

- Отключите установку программы `groups`, так как `coreutils` предоставляет лучшую версию и содержащихся в пакете `man-pages` man-страниц

- Для использования более безопасного метода шифрования SHA-512 вместо стандартного `crypt` метода, а также использования `/var/mail` вместо устаревшего `/var/spool/mail` и устранения дублирования путей в переменной `PATH` по умолчанию

- Сделайте незначительное изменение, для того чтобы номера групп начинались с 1000

```bash 
{{ include('../packages/shadow/prepare') }}
```

## Настройка

```bash 
{{ include('../packages/shadow/configure') }}
```

## Сборка

```bash 
{{ include('../packages/shadow/build') }}
```

## Установка

```bash 
{{ include('../packages/shadow/install') }}
```

## Настройка

Для включения теневых паролей и групп выполните:
```bash 
{{ include('../packages/shadow/postinstall') }}
```

В файле `/etc/default/useradd` можно настроить параметры утилиты `useradd`.

Задайте пароль на пользователя `root`:

```bash
passwd root
```

## Установленные файлы

Программы: chage, chfn, chgpasswd, chpasswd, chsh, expiry, faillog, gpasswd, groupadd, groupdel, groupmems, groupmod, grpck, grpconv, grpunconv, lastlog, login, logoutd, newgidmap, newgrp, newuidmap, newusers, nologin, passwd, pwck, pwconv, pwunconv, sg (ссылка на newgrp), su, useradd, userdel, usermod, vigr (ссылка на vipw) и vipw

Директории: `/etc/default`


