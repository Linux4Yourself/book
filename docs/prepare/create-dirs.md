# Создание базовых директорий и символических ссылок

Во первых создайте рабочую директорию `/sources` :
```bash
mkdir -pv $LIN/sources
```
Кросс-компилятор будет установлен в директорию `/tools`, создайте её:
```bash
mkdir -pv $LIN/tools
```
Теперь создайте базовую иеархию файловой системы:

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/file-system.sh ':include')

Подробнее об иерархии каталогов можно узнать в спецификации [FHS](https://refspecs.linuxfoundation.org/fhs.shtml)

## Для MultiLib
Создайте директорию для 32-битных библиотек:
```bash
mkdir -pv $LIN/usr/lib32
```
А также символическую ссылку на неё
```bash
ln -sv usr/lib32 $LIN/lib32
