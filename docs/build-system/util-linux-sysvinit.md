<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('util-linux');
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
./configure ADJTIME_PATH=/var/lib/hwclock/adjtime   \
            --libdir=/usr/lib    \
            --disable-chfn-chsh  \
            --disable-login      \
            --disable-nologin    \
            --disable-su         \
            --disable-setpriv    \
            --disable-runuser    \
            --disable-pylibmount \
            --disable-static     \
            --without-python     \
            --without-systemd    \
            --without-systemdsystemunitdir \
            runstatedir=/run     \
            --enable-usrdir-path 
```

## Сборка


```bash
make
```
## Тестирование

```bash
chown -Rv tester .
su tester -c "make -k check"
```

## Установка

```bash
make install
```
 
## Для multilib

### Очистка

```bash
make distclean
```

### Настройка

```bash
CC="gcc -m32" \
./configure ADJTIME_PATH=/var/lib/hwclock/adjtime   \
            --host=i686-pc-linux-gnu \
            --libdir=/usr/lib32      \
            --disable-chfn-chsh      \
            --disable-login          \
            --disable-nologin        \
            --disable-su             \
            --disable-setpriv        \
            --disable-runuser        \
            --disable-pylibmount     \
            --disable-static         \
            --without-python         \
            --enable-libmount-force-mountinfo \
            --without-systemd        \
            --without-systemdsystemunitdir \
            runstatedir=/run --disable-fdisks \
             --disable-mount  --disable-fsck   
```

### Сборка 

```bash
make
```

### Установка

```bash
make DESTDIR=$PWD/DESTDIR install
cp -Rv DESTDIR/usr/lib32/* /usr/lib32
rm -rf DESTDIR
```
