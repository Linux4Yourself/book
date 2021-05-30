<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('efibootmgr');
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

Исправьте ошибку сборки:

```bash
sed -e '/extern int efi_set_verbose/d' -i src/efibootmgr.c
```

## Сборка

```bash
make EFIDIR=LIN EFI_LOADER=grubx64.efi
```

## Установка

```bash
make install sbindir=/usr/bin EFIDIR=LIN
```
 
## Объяснение новых команд
* `EFIDIR=LIN`: указывает имя подкаталога дистрибутива в `/boot/efi/EFI`. Это нужно указать явно.
* `EFI_LOADER=grubx64.efi`: указывает имя загрузчика EFI по умолчанию.
* `sbindir=/sbin`: сделать `efibootmgr` доступным, даже если `/usr` отключен.
