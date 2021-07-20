# LibstdC++ Проход 1

Пакет содержит библиотеку времени исполнения, необходимую программам, написанным на языке C++ и собранным при помощи компилятора GNU.

Версия <b>v.{{ package.version }}</b>
<br />
Ссылка для скачивания: <a :href="package.url"><b>{{ package.url }}</b></a>
<br />
Текущая версия: <b>{{ package.version }}</b>
<br />
Домашняя страница: <a :href="package.homeUrl"><b>{{ package.homeUrl }}</b></a>
<br />
Важность: <b>Необходимый</b>
<br />
Размер архива: <b>{{ package.size }} Mb</b>
<br />
SBU: <b>1</b>

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('gcc');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
		}
  })
</script>

## Настройка

!> **Данный пакет входит в архив с исходным кодом пакета GCC**

Создайте отдельную директорию для сборки:

```bash
mkdir -v build
cd       build
```

Запустите скрипт `configure`

```bash
../libstdc++-v3/configure           \
    --host=$LIN_TGT                 \
    --build=$(../config.guess)      \
    --prefix=/usr                   \
    --disable-multilib              \
    --disable-nls                   \
    --disable-libstdcxx-pch         \
    --with-gxx-include-dir=/tools/$LIN_TGT/include/c++/11.1.0
```

### Значения параметров

` --host=$LIN_TGT` `--build=$(../config.guess)` - необходимо для кросс-компиляции

`--disable-multilib` - 32-битная версия libstdc не нужна на данном этапе

`--disable-libstdcxx-pch` - отключает установку предварительно скомпилированных заголовков, ненужных на данном этапе

`--with-gxx-include-dir=/tools/$LIN_TGT/include/c++/11.1.0` - путь поиска заголовков C++

## Сборка

```bash
make
```

## Установка

```bash
make DESTDIR=$LIN install
```
