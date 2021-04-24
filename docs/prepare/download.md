# Требуемые пакеты и патчи

На данном этапе все готово для загрузки необходимых пакетов и патчей. В передыдущей главе был создан каталог ``$LIN/sources``, который и будет задействован, как место хранения.

Самый простой способ загрузки всех требуемых пакетов и патчей - воспользоваться файлом [wget-list](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/develop/src/wget-list).

 Далее его можно передать как параметр программе ``wget``. 

```bash
wget --input-file=wget-list --continue --directory-prefix=$LIN/sources
```

При желании, вы можете выполнить проверку пакетов на соответствие контрольным суммам.

Загрузите файл [md5sums](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/develop/src/md5sums),поместите его в каталог ``$LIN/sources`` и выполните команду:

```bash
pushd $LIN/sources
md5sum -c md5sums
popd
```
