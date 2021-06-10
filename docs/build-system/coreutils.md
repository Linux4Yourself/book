<pkg :name="'coreutils'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените необязательный патч для поддержки локализации:
<package-script :package="'coreutils'" :type="'patch'"></package-script>
Удалите проблемный тест:

<package-script :package="'coreutils'" :type="'prepare'"></package-script>
## Настройка
<package-script :package="'coreutils'" :type="'configure'"></package-script>

### Значения параметров

`autoreconf` - Требует патч поддержки локализации

`FORCE_UNSAFE_CONFIGURE=1` - Разрешает запуск `configure` под пользователем `root`

## Сборка
<package-script :package="'coreutils'" :type="'build'"></package-script>
## Тестирование
<package-script :package="'coreutils'" :type="'test'"></package-script>
## Установка
<package-script :package="'coreutils'" :type="'install'"></package-script>
## Установленные файлы

Программы: b2sum, base32, base64, basename, basenc, cat, chcon, chgrp, chmod, chown, chroot, cksum, comm, cp, csplit, cut, date, dd, df, dir, dircolors, dirname, du, echo, env, expand, expr, factor, false, fmt, fold, groups, head, hostid, id, install, join, link, ln, logname, ls, md5sum, mkdir, mkfifo, mknod, mktemp, mv, nice, nl, nohup, nproc, numfmt, od, paste, pathchk, pinky, pr, printenv, printf, ptx, pwd, readlink, realpath, rm, rmdir, runcon, seq, sha1sum, sha224sum, sha256sum, sha384sum, sha512sum, shred, shuf, sleep, sort, split, stat, stdbuf, stty, sum, sync, tac, tail, tee, test, timeout, touch, tr, true, truncate, tsort, tty, uname, unexpand, uniq, unlink, users, vdir, wc, who, whoami и yes

Библиотеки:  libstdbuf.so (в /usr/libexec/coreutils)

<script>
		new Vue({
		el: '#main',
		data: { patch: {} },
		mounted: function () {
				this.getPatch();
		},
		methods: {
			getPatch: function() {
					getPackage('coreutils-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>
