{{ include('../packages/eudev/README.md') }}

## Настройка

> Если вы собираете систему с раздельной структурой каталогов, то пропустите этот шаг и приступите к следующему.

```bash 
{{ include('../packages/eudev/configure') }}
```

## При раздельной структуре каталогов

```bash 
{{ include('../packages/eudev/cldirs') }}
```

## Сборка

```bash 
{{ include('../packages/eudev/build') }}
```

## Тестирование

```bash 
{{ include('../packages/eudev/test') }}
```

## Установка

```bash 
{{ include('../packages/eudev/install') }}
```

Установите необходимые файлы:

```bash 
{{ include('../packages/eudev/postinstall') }}
```

## Для multilib

### Очистка

```bash 
{{ include('../packages/eudev/multi_prepare') }}
```

### Настройка

```bash 
{{ include('../packages/eudev/multi_configure') }}
```

### Сборка

```bash 
{{ include('../packages/eudev/multi_build') }}
```

### Установка

```bash 
{{ include('../packages/eudev/multi_install') }}
```

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
