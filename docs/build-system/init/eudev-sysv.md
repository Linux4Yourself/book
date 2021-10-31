{{ include('../packages/eudev/README.md') }}

## Настройка

> Если вы собираете систему с раздельной структурой каталогов, то пропустите этот шаг и приступите к следующему.

{{ include('../packages/eudev/configure') }}

## При раздельной структуре каталогов

{{ include('../packages/eudev/cldirs') }}

## Сборка

{{ include('../packages/eudev/build') }}

## Тестирование

{{ include('../packages/eudev/test') }}

## Установка

{{ include('../packages/eudev/install') }}

Установите необходимые файлы:

{{ include('../packages/eudev/postinstall') }}

## Для multilib

### Очистка

{{ include('../packages/eudev/multi_prepare') }}

### Настройка

{{ include('../packages/eudev/multi_configure') }}

### Сборка

{{ include('../packages/eudev/multi_build') }}

### Установка

{{ include('../packages/eudev/multi_install') }}

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
