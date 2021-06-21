<pkg :name="'eudev'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>
## Настройка
<package-script :package="'eudev'" :type="'configure'"></package-script>

## Сборка
<package-script :package="'eudev'" :type="'build'"></package-script>

## Тестирование
<package-script :package="'eudev'" :type="'test'"></package-script>

## Установка
<package-script :package="'eudev'" :type="'install'"></package-script>


Установите необходимые файлы:

<package-script :package="'eudev'" :type="'postinstall'"></package-script>
 
## Для multilib

### Очистка

<package-script :package="'eudev'" :type="'multi_prepare'"></package-script>

### Настройка
<package-script :package="'eudev'" :type="'multi_configure'"></package-script>

### Сборка 
<package-script :package="'eudev'" :type="'multi_build'"></package-script>

### Установка
<package-script :package="'eudev'" :type="'multi_install'"></package-script>

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
