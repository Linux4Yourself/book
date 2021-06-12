<pkg :name="'kbd'" instsize showsbu2></pkg>


## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч для исправления работы клавиш backspace и delete:
<package-script :package="'kbd'" :type="'patch'"></package-script>

Удалите не нужную программу `resizecons` требующею svgalib:
<package-script :package="'kbd'" :type="'prepare'"></package-script>


## Настройка
<package-script :package="'kbd'" :type="'configure'"></package-script>

### Значения параметров

`--disable-vlock` - Данная библиотека требует Linux-PAM.

## Сборка
<package-script :package="'kbd'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'kbd'" :type="'test'"></package-script>

## Установка
<package-script :package="'kbd'" :type="'install'"></package-script>

!> Пакет `kbd` не предоставляет некоторых рабочих раскладок клавиатуры (например, для белорусского языка). Загрузите (при необходимости) эти раскладки отдельно.

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPatch();
		},
		methods: {
			getPatch: function() {
					getPackage('kbd-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>
