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


## Настройка

```bash
unset {C,CPP,CXX,LD}FLAGS
./configure --prefix=/usr          \
            --sbindir=/sbin        \
            --sysconfdir=/etc      \
            --disable-efiemu       \
            --disable-werror
```

## Объяснение параметров configure

`--disable-efiemu` - Отключает установку большого и не нужного компонента

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
 
