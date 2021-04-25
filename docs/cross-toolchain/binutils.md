# {{ package.name }} v.{{ package.version }}

Описание: {{ package.description }}

Ссылка для загрузки: <a :href="package.url">{{ package.url}}</a>

Размер архива: {{ package.size }} Mb

Имя файла: {{ package.fileName }}

md5-сумма файла: {{ package.md5 }}

Страница релизов: <a :href="package.releasesUrl">{{ package.releasesUrl}}</a>

Домашняя страница: <a :href="package.homeUrl">{{ package.homeUrl}}</a>

Приоритет: {{ package.priority }}

SBU: {{ package.sbu }}

<script>
		new Vue({
		el: '#main',
		data: { package: {} },
		mounted: function () {
				this.getPackage('binutils');
		},
		methods: {
			getPackage: function(name) {
					getPackage(name)
					.then(response => this.package = response);
			}
		}
  })
</script>

## Сборка 

Важно: пакет binutils должны быть установлен раньше GCC и libc

Документация binutils рекомендует использовать отдельную директорию для сборки:

```bash
mkdir bld
cd bld
```

**1 SBU равен времени сборки данного пакеты**

Сначала запустим скрипт `configure`:
```bash
../configure  --prefix=$LIN/tools       \
             --with-sysroot=$LIN        \
             --target=$LIN_TGT          \
             --disable-nls              \
             --disable-werror        
```

Для MultiLib добавьте параметр   --enable-multilib

### Объяснение 

` --with-sysroot=$LIN `     `--target=$LIN_TGT` - необходимо для кросс-компиляции.

`--disable-nls` - Для кросс-компилятора не требуется локализация.

`--disable-werror` - Отключает остановку сборки при предупреждениях.

Далее скомпилируем пакет:

```bash
make
```

## Установка

Чтобы установить данный пакет, выполните:
```bash
make install -j1
```

`-j1` предотвращает возможную ошибку
