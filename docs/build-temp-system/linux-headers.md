<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('linux');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
		}
  })
</script>

## Сборка

!> **Данный пакет является частью архива с ядром Linux**

!> **Данный пакет устанавливается на свое окончательное место и не будет переустановлен впоследствии**
 
 Во первых убедитесь что в архив не включены файлы которые могут помешать сборке. 
```bash
make mrproper
```

Эта команда выполнит более интенсивную очистку дерева исходных текстов. Иногда она является необходимой.
 
### Подготовьте заголовки для использования:

```bash
make headers
```

## Установка

```bash
find usr/include -name '.*' -delete
rm usr/include/Makefile
cp -rv usr/include $LIN/usr
```

### Установленные файлы

Данный пакет устанавливает множество заголовочных файлов, в частности ` /usr/include/asm/*.h, /usr/include/asm-generic/*.h, /usr/include/drm/*.h, /usr/include/linux/*.h, /usr/include/misc/*.h, /usr/include/mtd/*.h, /usr/include/rdma/*.h, /usr/include/scsi/*.h, /usr/include/sound/*.h, /usr/include/video/*.h, and /usr/include/xen/*.h`
