<package-info :package="package" showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('systemd');
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

Удалите ненужную группу `render` из правил `udev`:

```bash
sed -i 's/GROUP="render"/GROUP="video"/' rules.d/50-udev-default.rules.in
```

## Настройка

```bash
mkdir -p build
cd       build

LANG=en_US.UTF-8                    \
meson --prefix=/usr                 \
      --sysconfdir=/etc             \
      --localstatedir=/var          \
      -Dblkid=true                  \
      -Dbuildtype=release           \
      -Ddefault-dnssec=no           \
      -Dfirstboot=false             \
      -Dinstall-tests=false         \
      -Dldconfig=false              \
      -Dsysusers=false              \
      -Db_lto=false                 \
      -Drpmmacrosdir=no             \
      -Dhomed=false                 \
      -Duserdb=false                \
      -Dman=false                   \
      -Dmode=release                \
      -Dtests=false                 \
      ..
```

## Сборка

```bash
LANG=en_US.UTF-8 ninja
```

## Установка

```bash
LANG=en_US.UTF-8 ninja install
```

Удалите ненужный каталог:

```bash
rm -rf /usr/lib/pam.d
```


Создайте файл `/etc/machine-id` необходимый для `systemd-journald`:

```bash
systemd-machine-id-setup
```

Настройте базовую целевую структуру:

```bash
systemctl preset-all
```

Отключите службу, которая, как известно, вызывает проблемы с системами, использующими конфигурацию сети, отличную от той, которая предоставляется systemd-networkd:

```bash
systemctl disable systemd-time-wait-sync.service
```

## Для multilib

### Очистка

```bash
rm -rf ./*
```

### Настройка

```bash

LANG=en_US.UTF-8  CC="gcc -m32" CXX="g++ -m32"  PKG_CONFIG_PATH="/usr/lib32/pkgconfig"   \
meson --prefix=/usr                 \
      --sysconfdir=/etc             \
      --localstatedir=/var          \
      --libdir=/usr/lib32           \
      -Dblkid=true                  \
      -Dbuildtype=release           \
      -Ddefault-dnssec=no           \
      -Dfirstboot=false             \
      -Dinstall-tests=false         \
      -Dldconfig=false              \
      -Dsysusers=false              \
      -Db_lto=false                 \
      -Drpmmacrosdir=no             \
      -Dhomed=false                 \
      -Duserdb=false                \
      -Dman=false                   \
      -Dmode=release                \
      -Dtests=false                 \
      ..
```

### Сборка 

```bash
ninja
```

### Установка

```bash
DESTDIR=$PWD/DESTDIR ninja install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
