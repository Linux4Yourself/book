# Создание файла fstab

При загрузке системы исходя из данных в файле ``/etc/fstab`` монтируются различные разделы и диски, в том числе - корневой раздел.
Создайте файл ``fstab``:

[filename](https://raw.githubusercontent.com/Linux4Yourself/Linux4Yourself.Book.Scripts/develop/src/fstab.sh ':include')

Замените sdX на нужное значение.

Для использования UEFI выполните:

```bash
echo "/dev/sdN     /boot/efi      vfat    umask=0077           0     0" >> /etc/fstab
```

Заменив sdN на нужное значение.

Для использования `swap` добавьте:

```bash
echo "/dev/sdY     swap         swap     pri=1               0     0" >> /etc/fstab
```

Заменив sdY на нужное значение.

Также вы можете добавить другие разделы и диски в данный файл.

!> После выполнения данных инструкций внимательно проверьте данный файл на наличие ошибок.
