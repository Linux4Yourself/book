<package-info :package="package" showsbu2 ></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPackage('coreutils');
				this.getBzipPatch();
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			},
			getBzipPatch: function() {
					getPackage('coreutils-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените необязательный патч для поддержки локализации:

<pre class="pre">
patch -Np1 -i ../{{patch.fileName}}
</pre>

Удалите проблемный тест:

```bash
sed -i '/test.lock/s/^/#/' gnulib-tests/gnulib.mk
```

## Настройка

```bash
autoreconf -fiv
FORCE_UNSAFE_CONFIGURE=1 ./configure \
            --prefix=/usr            \
            --enable-no-install-program=kill,uptime
```

### Пояснение параметров configure

`autoreconf` - Требует патч поддержки локализации

`FORCE_UNSAFE_CONFIGURE=1` - Разрешает запуск `configure` под пользователем `root`

## Сборка

```bash
make
```

## Тестирование

```bash
make NON_ROOT_USERNAME=tester check-root
```

## Установка

```bash
make install
```

## Установленные файлы

Программы: [, b2sum, base32, base64, basename, basenc, cat, chcon, chgrp, chmod, chown, chroot, cksum, comm, cp, csplit, cut, date, dd, df, dir, dircolors, dirname, du, echo, env, expand, expr, factor, false, fmt, fold, groups, head, hostid, id, install, join, link, ln, logname, ls, md5sum, mkdir, mkfifo, mknod, mktemp, mv, nice, nl, nohup, nproc, numfmt, od, paste, pathchk, pinky, pr, printenv, printf, ptx, pwd, readlink, realpath, rm, rmdir, runcon, seq, sha1sum, sha224sum, sha256sum, sha384sum, sha512sum, shred, shuf, sleep, sort, split, stat, stdbuf, stty, sum, sync, tac, tail, tee, test, timeout, touch, tr, true, truncate, tsort, tty, uname, unexpand, uniq, unlink, users, vdir, wc, who, whoami и yes

Библиотеки:  libstdbuf.so (в /usr/libexec/coreutils)
