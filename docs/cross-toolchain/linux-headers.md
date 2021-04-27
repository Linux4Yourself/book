# Заголовки ядра Linux

(не знаю как шапку этому пакету приклеить)

## Сборка

!> **Данный пакет является частью архива с ядром Linux**

!> **Данный пакет устанавливается на свое окончательное место и не будет пере установлен впоследствии**
 
 Во первых убедитесь что в архив не включены файлы которые могут помешать сборке:
 
```bash
make mrproper
```
 
Далее подготовьте заголовки для использования:

```bash
make headers
```

## Установка

Для установки этого пакета выполните:

```bash
find usr/include -name '.*' -delete
rm usr/include/Makefile
cp -rv usr/include $LFS/usr
```

## Установленные файлы

Данный пакет устанавливает множество заголовочных файлов, в частности ` /usr/include/asm/*.h, /usr/include/asm-generic/*.h, /usr/include/drm/*.h, /usr/include/linux/*.h, /usr/include/misc/*.h, /usr/include/mtd/*.h, /usr/include/rdma/*.h, /usr/include/scsi/*.h, /usr/include/sound/*.h, /usr/include/video/*.h, and /usr/include/xen/*.h`
