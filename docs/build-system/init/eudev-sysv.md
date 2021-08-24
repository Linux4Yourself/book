<pkg :name="'eudev'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Настройка

> Если вы собираете систему с раздельной структурой каталогов, то пропустите этот шаг и приступите к следующему.

[filename](../../packages/eudev/configure ':include')

## При раздельной структуре каталогов

[filename](../../packages/eudev/cldirs ':include')

## Сборка

[filename](../../packages/eudev/build ':include')

## Тестирование

[filename](../../packages/eudev/test ':include')

## Установка

[filename](../../packages/eudev/install ':include')

Установите необходимые файлы:

[filename](../../packages/eudev/postinstall ':include')

## Для multilib

### Очистка

[filename](../packages/eudev/multi_prepare ':include')

### Настройка

[filename](../../packages/eudev/multi_configure ':include')

### Сборка

[filename](../../packages/eudev/multi_build ':include')

### Установка

[filename](../../packages/eudev/multi_install ':include')

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPatch();
		},
		methods: {
			getPatch: function() {
					getPackage('udev')
					.then(response => this.patch = response);
			},
		}
  })
</script>
