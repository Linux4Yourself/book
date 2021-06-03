<package-info :package="package" instsize showsbu2></package-info>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('bash');
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

Для многоядерных процессоров внесите исправление, которое устраняет проблему "состояния гонки" при использовании нескольких ядер.

```bash
sed -i  '/^bashline.o:.*shmbchar.h/a bashline.o: ${DEFDIR}/builtext.h' Makefile.in
```


## Настройка

```bash
./configure --prefix=/usr                    \
            --without-bash-malloc            \
            --with-installed-readline
```

### Значения параметров configure

`--without-bash-malloc` - Этот параметр отключает использование функции выделения памяти (malloc) Bash, которая вызывает ошибки сегментации. Отключив эту опцию, Bash будет использовать функции malloc из libc, которые более стабильны.

`--with-installed-readline` - Указывает на то, что следует задействовать  ранее установленную библиотеку readline, вместо использования внутренней.

## Сборка

```bash
make
```


## Тестирование

Для корректного выполнения тестов, сделайте пользователя `tester` владельцем каталога

```bash
chown -Rv tester .
```

И запустите тесты от пользователя `tester`

```bash
su tester << EOF
PATH=$PATH make tests < $(tty)
EOF
```


## Установка

```bash
make install
```


Запустите ``bash`` (заменив который в настоящее время выполняется):

```bash
exec /bin/bash --login +h
```
