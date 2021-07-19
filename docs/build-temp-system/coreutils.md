<package-info :package="package" showsbu></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('coreutils');
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

Запустите скрипт `configure`:

```bash
./configure --prefix=/usr                            \
            --host=$LIN_TGT                          \
            --build=$(build-aux/config.guess)        \
            --enable-install-program=hostname        \
            --enable-no-install-program=kill,uptime  \
            --disable-nls
```

### Значения параметров

` --enable-install-program=hostname` - включает установку программы `hostname`, нужной некоторым пакетам.

`--enable-no-install-program=kill,uptime` - программы `kill` и `uptime` предоставляются другими пакетами.

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```

Переместите программы в их окончательные ожидаемые места. Хотя в этой временной среде в этом нет необходимости, но вым нужно это сделать, потому что некоторые программы используют фиксированное расположение исполняемых файлов:

```bash
mv -v $LIN/usr/bin/{cat,chgrp,chmod,chown,cp,date,dd,df,echo} $LIN/bin
mv -v $LIN/usr/bin/{false,ln,ls,mkdir,mknod,mv,pwd,rm}        $LIN/bin
mv -v $LIN/usr/bin/{rmdir,stty,sync,true,uname}               $LIN/bin
mv -v $LIN/usr/bin/{head,nice,sleep,touch}                    $LIN/bin
mv -v $LIN/usr/bin/chroot                                     $LIN/usr/sbin
mkdir -pv $LIN/usr/share/man/man8
mv -v $LIN/usr/share/man/man1/chroot.1                        $LIN/usr/share/man/man8/chroot.8
sed -i 's/"1"/"8"/'                                           $LIN/usr/share/man/man8/chroot.8
```
