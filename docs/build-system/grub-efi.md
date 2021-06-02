<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('grub');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

https://unifoundry.com/pub/unifont/unifont-13.0.06/font-builds/unifont-13.0.06.pcf.gz

## Подготовка

Установите шрифт, используемый grub

```bash
mkdir -pv /usr/share/fonts/unifont &&
gunzip -c unifont-13.0.06.pcf.gz > /usr/share/fonts/unifont/unifont.pcf
```

## Настройка

```bash
unset {C,CPP,CXX,LD}FLAGS
./configure --prefix=/usr        \
            --sbindir=/usr/bin      \
            --sysconfdir=/etc    \
            --disable-efiemu     \
            --enable-grub-mkfont \
            --with-platform=efi  \
            --disable-werror   
```

## Объяснение параметров configure

`--disable-efiemu` - Отключает установку большого и не нужного компонента

`--with-platform=efi` - Использовать EFI

`--enable-grub-mkfont` - Включает установку шрифтов

## Сборка


```bash
make
```

## Установка

```bash
make install &&
mv -v /etc/bash_completion.d/grub /usr/share/bash-completion/completions
source /etc/profile
```
 
