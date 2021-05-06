# Требуемые пакеты и патчи

На данном этапе все готово для загрузки необходимых пакетов и патчей. 
Самый простой способ загрузки всех требуемых пакетов и патчей - воспользоваться файлом [wget-list](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/develop/src/wget-list).

 Далее его можно передать как параметр программе ``wget``. 

```bash
wget --input-file=wget-list --continue --directory-prefix=$LIN/usr/src
```

При желании, вы можете выполнить проверку пакетов на соответствие контрольным суммам.

Загрузите файл [md5sums](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/develop/src/md5sums):
```bash
wget https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Packages/develop/src/md5sums
```

Поместите его в каталог ``$LIN/usr/src`` и выполните команду:

```bash
pushd $LIN/usr/src
md5sum -c md5sums
popd
```
