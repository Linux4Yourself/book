<pkg :name="'efivar'" instsize showsbu2></pkg>

## Дополнительные необходимые файлы

<a :href="patch.url">{{ patch.url}}</a>

## Подготовка

Примените патч, исправляющий ошибку сборки новыми версиями GCC:

<package-script :package="'efivar'" :type="'patch'"></package-script>

## Сборка

<package-script :package="'efivar'" :type="'build'"></package-script>

## Установка

<package-script :package="'efivar'" :type="'install'"></package-script>

<script>
		new Vue({
		el: '#main',
		data: { package: {}, patch: {} },
		mounted: function () {
				this.getPatch();
		},
		methods: {
			getPatch: function() {
					getPackage('efivar-patch')
					.then(response => this.patch = response);
			},
		}
  })
</script>
